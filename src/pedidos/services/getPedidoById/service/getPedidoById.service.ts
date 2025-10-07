import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GetPedidoByIdInputDto } from '../dto/getProdutoByIdInputDto';
import { GetPedidoByIdRepository } from '../repository/getPedidoById.repository';

@Injectable()
export class GetPedidoByIdService {
    constructor(
        private readonly getPedidoRepository: GetPedidoByIdRepository,
    ) {}

    async execute(data: GetPedidoByIdInputDto) {
        try {
            return await this.getPedidoRepository.buscaProduto(data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
