import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
// import { GetProdutosOutPutDto } from '../dto/getProdutosOutPut.dto';
import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { GetProdutosInputDto } from '../../getProdutos/dto/getProdutosInputDto';
import { GetProdutosOutPutDto } from '../../getProdutos/dto/getProdutosOutPut.dto';
import { GetProdutoByIdOutPutDto } from '../dto/getProdutoByIdOutputDto';
import { GetProdutosByIdRepository } from '../repository/getProdutosById.repository';
@Injectable()
export class GetProdutosByIdService {
    constructor(
        private readonly getProdutoByIdRepository: GetProdutosByIdRepository,
    ) {}

    async execute(id: string): Promise<GetProdutoByIdOutPutDto> {
        try {
            const produto =
                await this.getProdutoByIdRepository.getProdutoById(id);

            // const produtoLista = (produto) =>
            //     new GetProdutoByIdOutPutDto(
            //         produto.id,
            //         produto.id_usuario,
            //         produto.nome,
            //         produto.valor,
            //         produto.descricao,
            //         produto.quantidade,
            //         produto.categoria,
            //     );

            if (!produto) {
                throw new NotFoundException('Produto Não Encontrado');
            }
            return produto;

            //verificar se dessa forma que fiz com o output vai resolver o meu problema
            // {
            //     id: produto.id,
            //     nome: produto.nome,
            //     valor: produto.valor,
            //     descricao: produto.descricao,
            //     categoria: produto.categoria,
            // };
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}
