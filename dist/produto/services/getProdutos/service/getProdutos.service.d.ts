import { GetProdutosInputDto } from '../dto/getProdutosInputDto';
import { GetProdutosRepository } from '../repository/getProdutos.repository';
export declare class GetProdutosService {
    private readonly getProdutosRepository;
    constructor(getProdutosRepository: GetProdutosRepository);
    execute(data: GetProdutosInputDto): Promise<void>;
}
