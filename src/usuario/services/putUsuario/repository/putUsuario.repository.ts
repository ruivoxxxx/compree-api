import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';
import { PutUsuarioInputDto } from '../dto/putUsuarioInputDto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PutUsuarioRepository {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly dataBaseService: Repository<UsuarioEntity>,
    ) {}

    async buscaUsuario(id: string) {
        return await this.dataBaseService.findOneBy({ id });
    }

    async atualizaUsuario(data: PutUsuarioInputDto) {
        await this.dataBaseService
            .createQueryBuilder()
            .update(UsuarioEntity)
            .set({
                nome: data.nome,
                email: data.email,
                senha: data.senha,
                updated_at: () => 'CURRENT_TIMESTAMP',
            })
            .where('id= :id', { id: data.id })
            .execute();
    }
}
