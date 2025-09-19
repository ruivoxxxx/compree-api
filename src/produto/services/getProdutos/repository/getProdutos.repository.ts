import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';

//testar apenas aqui nesse repository e ver se futuramente essa arquitetura funcionara
@Injectable()
export class GetProdutosRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly getProdutosRepository: Repository<ProdutoEntity>,
    ) {}

    async getProdutos() {
        return await this.getProdutosRepository.find();
    }
}
