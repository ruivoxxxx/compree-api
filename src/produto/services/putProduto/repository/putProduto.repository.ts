import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';
import { PutProdutoInputDto } from '../dto/putProdutoInputDto';

export class PutProdutoRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly dataBaseService: Repository<ProdutoEntity>,
    ) {}

    async buscaProduto(id: string) {
        return undefined;
    }

    async atualizaProduto(data: PutProdutoInputDto) {}
}

