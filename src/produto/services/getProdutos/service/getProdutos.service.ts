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

    async execute() {
        try {
            const produtos = await this.getProdutosRepository.find();

            const produtoLista = produtos.map(
                (produto) =>
                    new GetProdutosInputDto(
                        produto.id,
                        produto.nome,
                        produto.valor,
                        produto.descricao,
                        produto.quantidade,
                    ),
            );
            return produtoLista;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
