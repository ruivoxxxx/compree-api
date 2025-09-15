import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
@Injectable()
export class PostProdutosService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly postProdutoRepository: Repository<ProdutoEntity>,
    ) {}
    async execute(data: ProdutoEntity) {
        try {
            return await this.postProdutoRepository.save(data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
