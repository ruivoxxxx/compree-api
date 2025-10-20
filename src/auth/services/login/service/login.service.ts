import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInputDto } from '../dto/loginInputDto';
import { PostUsuarioRepository } from 'src/usuario/services/postUsuario/repository/postUsuario.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly postUsuarioRepository: PostUsuarioRepository,
        private readonly jwtService: JwtService,
    ) {}

    async execute(data: LoginInputDto) {
        const result = await this.postUsuarioRepository.searchEmail(data.email);

        const pass = await bcrypt.compare(data.senha, result!.senha);

        if (!pass) {
            throw new UnauthorizedException();
        }

        const payload = {
            sub: result!.id,
            nome_usuario: result!.nome,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
