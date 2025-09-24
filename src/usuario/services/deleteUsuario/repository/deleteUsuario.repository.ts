import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';
@Injectable()
export class DeleteUsuarioRepository {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly dataBaseService: Repository<UsuarioEntity>,
    ) {}
    async buscaUsuario(id: string) {
        return undefined;
    }
    async deletaUsuario() {}
}
