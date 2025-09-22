import { InjectRepository } from '@nestjs/typeorm';
import { PostUsuarioInputDto } from '../dto/postUsuarioInputDto';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PostUsuarioRepository {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly dataBase: Repository<UsuarioEntity>,
    ) {}
    async createUsuario(data: PostUsuarioInputDto) {
        await this.dataBase.save(data);
    }
}
