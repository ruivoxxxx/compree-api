import { InjectRepository } from '@nestjs/typeorm';
import { GetProdutosInputDto } from '../dto/getProdutosInputDto';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
// import { GetProdutosOutPutDto } from '../dto/getProdutosOutPut.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
@Injectable()
export class GetProdutosService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly getProdutosRepository: Repository<ProdutoEntity>,
    ) {}

    async execute(data: GetProdutosInputDto) {
        try {
            // return await this.getProdutosRepository.find(data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
