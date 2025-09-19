import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';
import { PostUsuarioInputDto } from '../dto/postUsuarioInputDto';
@Injectable()
export class PostUsuarioService {
    constructor(
        private readonly postUsuarioRepository: PostUsuarioRepository,
    ) {}

    async execute(data: PostUsuarioInputDto) {
        try {
            return await this.postUsuarioRepository.save(data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
