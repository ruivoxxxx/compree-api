import {
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';

import { DeleteProdutoRepository } from '../repository/deleteProduto.repository';

export class DeleteProdutoService {
    constructor(
        private readonly deleteProdutoRepository: DeleteProdutoRepository,
    ) {}

    async execute(id: string) {
        try {
            const produto = await this.deleteProdutoRepository.buscaProduto(id);
            if (!produto) {
                throw new NotFoundException('Produto Não Encontrado');
            }
            await this.deleteProdutoRepository.deletaProduto(); //deve apenas atualizar o delete at e delete by
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}

