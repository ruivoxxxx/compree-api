import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { GetUsuarioByIdRepository } from '../repository/getUsuarioByIdRepository';
@Injectable()
export class GetUsuarioByIdService {
    constructor(
        private readonly getUsuarioByIdRepository: GetUsuarioByIdRepository,
    ) {}
    async execute(id: string) {
        try {
            const result =
                await this.getUsuarioByIdRepository.getUsuarioById(id);

            if (!result) {
                throw new NotFoundException('Usuário não encontrado');
            }
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
