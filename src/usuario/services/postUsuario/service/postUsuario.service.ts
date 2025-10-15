import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PostUsuarioInputDto } from '../dto/postUsuarioInputDto';
import { PostUsuarioRepository } from '../repository/postUsuario.repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PostUsuarioService {
    constructor(
        private readonly postUsuarioRepository: PostUsuarioRepository,
    ) {}

    async execute(data: PostUsuarioInputDto) {
        try {
            const senha = (data.senha = await bcrypt.genSalt());
            console.log(data.senha);

            await this.postUsuarioRepository.createUsuario(data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
