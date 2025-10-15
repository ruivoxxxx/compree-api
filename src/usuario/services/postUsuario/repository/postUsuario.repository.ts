import { InjectRepository } from '@nestjs/typeorm';
import { PostUsuarioInputDto } from '../dto/postUsuarioInputDto';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PostUsuarioRepository {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly dataBaseService: Repository<UsuarioEntity>,
    ) {}
    async createUsuario(data: PostUsuarioInputDto) {
        await this.dataBaseService
            .createQueryBuilder()
            .insert()
            .into(UsuarioEntity)
            .values({
                nome: () => 'UPPER(:nome)',
                email: () => 'UPPER (:email)',
                senha: data.senha,
            })
            .setParameters({ nome: data.nome, email: data.email })
            .execute();
    }
}
