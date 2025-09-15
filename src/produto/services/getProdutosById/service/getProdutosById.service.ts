import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
// import { GetProdutosOutPutDto } from '../dto/getProdutosOutPut.dto';
import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
@Injectable()
export class GetProdutosByIdService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly getProdutosRepository: Repository<ProdutoEntity>,
    ) {}

    async execute(data: ProdutoEntity) {
        try {
            const produtos = await this.getProdutosRepository.findOneBy(data);
            if (!produtos) {
                throw new NotFoundException('Produto Não Encontrado');
            }
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}

