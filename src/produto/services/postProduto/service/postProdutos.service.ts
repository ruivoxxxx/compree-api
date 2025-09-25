import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { PostProdutoInputDto } from '../dto/postProdutosInputDto';
import { PostProdutoRepository } from '../repository/postProdutos.repositor';
@Injectable()
export class PostProdutoService {
    constructor(
        private readonly postProdutoRepository: PostProdutoRepository,
    ) {}
    async execute(data: PostProdutoInputDto) {
        try {
            const result =
                await this.postProdutoRepository.verificaProduto(data);
            if (result) {
                throw new BadRequestException('Produto Já Existe');
            }
            await this.postProdutoRepository.criaProduto(data);
        } catch (error) {
            if (error instanceof BadRequestException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}
