import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { PostProdutoInputDto } from '../dto/postProdutosInputDto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PostProdutoRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly dataBaseService: Repository<ProdutoEntity>,
    ) {}

    async verificaProduto(data: PostProdutoInputDto) {
        return await this.dataBaseService.findOne({
            select: ['nome'],
            where: { nome: data.nome },
        });
    }

    async criaProduto(data: PostProdutoInputDto) {
        await this.dataBaseService.save(data);
    }
}
