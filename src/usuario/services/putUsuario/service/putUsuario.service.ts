import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';
@Injectable()
export class PutUsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly putUsuarioRepository: Repository<UsuarioEntity>,
    ) {}
    async execute(id: string, data: UsuarioEntity) {
        try {
            const verify_users = await this.putUsuarioRepository.findOneBy({
                id,
            });
            if (!verify_users) {
                throw new NotFoundException('Usuário Não Encontrado');
            }
            Object.assign(verify_users, data);
            await this.putUsuarioRepository.save(verify_users);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}

