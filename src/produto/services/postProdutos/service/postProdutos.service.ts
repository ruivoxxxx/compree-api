import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { PostProdutosRepository } from '../repository/postProdutos.repositor';
import { PostProdutosInputDto } from '../dto/postProdutosInputDto';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

export class PostProdutosService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly postProdutoRepository: Repository<ProdutoEntity>,
    ) {}
    async execute(data: PostProdutosInputDto) {
        try {
            return await this.postProdutoRepository.create();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}

