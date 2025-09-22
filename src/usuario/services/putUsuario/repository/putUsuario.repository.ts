import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';
import { PutUsuarioInputDto } from '../dto/putUsuarioInputDto';

export class PutUsuarioRepository {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly dataBaseService: Repository<UsuarioEntity>,
    ) {}

    // async atualizaUsuario(data: PutUsuarioInputDto) {
    //     await this.dataBaseService.update({id:data.id},{nome:data.nome, email:data.email,senha})
    // }
}

