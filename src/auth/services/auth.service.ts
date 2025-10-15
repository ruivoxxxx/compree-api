import { UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { GetUsuarioRepository } from 'src/usuario/services/getUsuario/repository/getUsuario.repository';
import { Repository } from 'typeorm';

export class AuthService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly getUsuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async execute(nome_usuario: string, senha: string) {
        const user = await this.getUsuarioRepository.findOne({
            where: { nome_usuario: nome_usuario },
        });
        if (user!.senha !== senha) {
            throw new UnauthorizedException();
        }
    }
}
