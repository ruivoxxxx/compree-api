import { GetProdutosInputDto } from '../dto/getProdutosInputDto';
import { GetProdutosRepository } from '../repository/getProdutos.repository';

export class GetProdutosService {
    constructor(
        private readonly getProdutosRepository: GetProdutosRepository,
    ) {}

    async execute(data: GetProdutosInputDto) {
        // const result=await this.getProdutosRepository.getProdutos(data)
    }
}
