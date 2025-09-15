import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';
@Injectable()
export class PostUsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly postUsuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async execute(data: UsuarioEntity) {
        try {
            return await this.postUsuarioRepository.save(data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}

