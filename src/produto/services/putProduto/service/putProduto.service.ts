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
            const verifyProduto = await this.putProdutoRepository.findOneBy({
                id,
            });
            if (!verifyProduto) {
                throw new NotFoundException('Produto não Encontrado');
            }
            Object.assign(verifyProduto, data);
            await this.putProdutoRepository.save(verifyProduto);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}

