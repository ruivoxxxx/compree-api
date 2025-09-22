import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { GetProdutosOutPutDto } from '../dto/getProdutosOutPut.dto';

@Injectable()
export class GetProdutosRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly dataBaseService: Repository<ProdutoEntity>,
    ) {}

    async getProdutos(): Promise<GetProdutosOutPutDto[]> {
        return await this.dataBaseService.find({
            select: ['id', 'nome', 'valor', 'categoria', 'descricao'],
        });
    }
}
