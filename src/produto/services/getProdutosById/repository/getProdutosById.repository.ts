import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { GetProdutoByIdOutPutDto } from '../dto/getProdutoByIdOutputDto';
import { GetProdutosOutPutDto } from '../../getProdutos/dto/getProdutosOutPut.dto';
@Injectable()
export class GetProdutosByIdRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly dataBaseService: Repository<ProdutoEntity>,
    ) {}

    async getProdutoById(id: string) {
        return await this.dataBaseService.findOne({
            select: ['id', 'nome', 'valor', 'categoria', 'descricao'],
            where: { id: id },
        });
    }
}
