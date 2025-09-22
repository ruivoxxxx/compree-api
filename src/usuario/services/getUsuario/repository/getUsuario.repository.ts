import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { IsNull, Repository } from 'typeorm';
import { GetUsuarioOutputDto } from '../dto/getUsuarioOutputDto';

export class GetUsuarioRepository {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly dataBaseService: Repository<UsuarioEntity>,
    ) {}

    async getUsuarios(): Promise<GetUsuarioOutputDto[]> {
        return await this.dataBaseService.find({
            select: ['id', 'nome', 'email'],
            where: { deleted_at: IsNull },
            //ver se no banco por padrão os valores sao nulos
        });
    }
}

