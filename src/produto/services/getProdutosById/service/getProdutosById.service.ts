import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { GetProdutoByIdOutPutDto } from '../dto/getProdutoByIdOutputDto';
import { GetProdutosByIdRepository } from '../repository/getProdutosById.repository';
@Injectable()
export class GetProdutosByIdService {
    constructor(
        private readonly getProdutoByIdRepository: GetProdutosByIdRepository,
    ) {}

    async execute(id: string): Promise<GetProdutoByIdOutPutDto> {
        try {
            const produto =
                await this.getProdutoByIdRepository.getProdutoById(id);

            if (!produto) {
                throw new NotFoundException('Produto Não Encontrado');
            }
            return produto;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}
