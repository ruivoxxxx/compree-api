import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PutProdutoInputDto } from 'src/produto/services/putProduto/dto/putProdutoInputDto';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';
import { PutUsuarioInputDto } from '../dto/putUsuarioInputDto';
@Injectable()
export class PutUsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly putUsuarioRepository: Repository<UsuarioEntity>,
    ) {}
    async execute(id: string, data: PutUsuarioInputDto) {
        try {
            const usuario = await this.putUsuarioRepository.findOneBy({
                id,
            });
            if (usuario) {
                throw new NotFoundException('Usuário Não Encontrado');
            }
            //testar em casa
            // await this.putUsuarioRepository.save(usuario);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}
