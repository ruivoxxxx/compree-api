import { InjectRepository } from '@nestjs/typeorm';
import { GetProdutosInputDto } from '../dto/getProdutosInputDto';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { GetProdutosOutPutDto } from '../dto/getProdutosOutPut.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
@Injectable()
export class GetProdutosService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly getProdutosRepository: Repository<ProdutoEntity>,
    ) {}

    async execute(data: GetProdutosInputDto): Promise<GetProdutosOutPutDto> {
        try {
            const result = await this.getProdutosRepository.find(data);

            return result;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
