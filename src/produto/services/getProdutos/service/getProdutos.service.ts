import { InjectRepository } from '@nestjs/typeorm';
import { GetProdutosInputDto } from '../dto/getProdutosInputDto';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
// import { GetProdutosOutPutDto } from '../dto/getProdutosOutPut.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GetProdutosRepository } from '../repository/getProdutos.repository';
import { GetProdutosOutPutDto } from '../dto/getProdutosOutPut.dto';
@Injectable()
export class GetProdutosService {
    constructor(
        private readonly getProdutosRepository: GetProdutosRepository,
    ) {}

    async execute(): Promise<GetProdutosOutPutDto[]> {
        try {
            const produtos = await this.getProdutosRepository.getProdutos();

            const produtosLista = produtos.map(
                (produto) =>
                    new GetProdutosInputDto(
                        produto.id,
                        produto.id_usuario,
                        produto.nome,
                        produto.valor,
                        produto.descricao,
                        produto.quantidade,
                        produto.categoria,
                    ),
            );
            return produtosLista;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
