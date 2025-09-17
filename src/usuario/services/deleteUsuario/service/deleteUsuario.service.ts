import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PutProdutoInputDto } from 'src/produto/services/putProduto/dto/putProdutoInputDto';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly putUsuarioRepository: Repository<UsuarioEntity>,
    ) {}
    async execute(id: string) {
        try {
            const verify_users = await this.putUsuarioRepository.findOneBy({
                id,
            });
            if (!verify_users) {
                throw new NotFoundException('Usuário Não Encontrado');
            }

            await this.putUsuarioRepository.remove(verify_users);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}
