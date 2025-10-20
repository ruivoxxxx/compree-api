import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInputDto } from '../dto/loginInputDto';
import { PostUsuarioRepository } from 'src/usuario/services/postUsuario/repository/postUsuario.repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        private readonly postUsuarioRepository: PostUsuarioRepository,
    ) {}

    async execute(data: LoginInputDto) {
        const result = await this.postUsuarioRepository.searchEmail(data.email);

        const pass = await bcrypt.compare(data.senha, result!.senha);

        if (!pass) {
            throw new UnauthorizedException();
        }

        console.log('Usuário Autenticado');
    }
}
