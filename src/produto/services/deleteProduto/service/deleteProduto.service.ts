import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { Repository } from 'typeorm';

export class DeleteProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly deleteProdutoRepository: Repository<ProdutoEntity>,
    ) {}

    async execute(data: ProdutoEntity) {
        try {
            const verifyProduto =
                await this.deleteProdutoRepository.findOneBy(data);
            if (!verifyProduto) {
                throw new NotFoundException('Produto Não Encontrado');
            }
            await this.deleteProdutoRepository.delete(data); //deve apenas atualizar o delete ad e delete by
        } catch (error) {}
    }
}

