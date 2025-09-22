import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { PutProdutoInputDto } from '../dto/putProdutoInputDto';
@Injectable()
export class PutProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly putProdutoRepository: Repository<ProdutoEntity>,
    ) {}

    async execute(id: string, data: PutProdutoInputDto) {
        try {
            const verify_produto = await this.putProdutoRepository.findOneBy({
                id,
            });
            if (!verify_produto) {
                throw new NotFoundException('Produto não Encontrado');
            }
            await this.putProdutoRepository.save(verify_produto);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}
