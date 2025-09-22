import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PostUsuarioInputDto } from '../dto/postUsuarioInputDto';
import { PostUsuarioRepository } from '../repository/postUsuarioRepository';
@Injectable()
export class PostUsuarioService {
    constructor(
        private readonly postUsuarioRepository: PostUsuarioRepository,
    ) {}

    async execute(data: PostUsuarioInputDto) {
        try {
            await this.postUsuarioRepository.createUsuario(data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
