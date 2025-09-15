import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GetUsuariosInputDto } from '../dto/getUsuariosInputDto';

@Injectable()
export class GetUsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly getUsuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async execute() {
        try {
            const users = await this.getUsuarioRepository.find();

            const users_list = users.map(
                (usuarios) =>
                    new GetUsuariosInputDto(usuarios.id, usuarios.nome),
            );
            return users_list;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
