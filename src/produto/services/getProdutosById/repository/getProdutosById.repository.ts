import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { GetProdutoByIdOutPutDto } from '../dto/getProdutoByIdOutputDto';
@Injectable()
export class GetProdutosByIdRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly dataBaseService: Repository<ProdutoEntity>,
    ) {}

    async getProdutoById(id: string) {
        const result = await this.dataBaseService.findOneBy({ id });

        return result || undefined;
    }
}
