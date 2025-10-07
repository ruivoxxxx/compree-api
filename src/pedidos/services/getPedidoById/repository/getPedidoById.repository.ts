import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidosEntity } from 'src/pedidos/entity/pedido.entity';
import { IsNull, Repository } from 'typeorm';
import { GetPedidoByIdInputDto } from '../dto/getProdutoByIdInputDto';

@Injectable()
export class GetPedidoByIdRepository {
    constructor(
        @InjectRepository(PedidosEntity)
        private readonly dataBaseService: Repository<PedidosEntity>,
    ) {}

    async buscaProduto(data: GetPedidoByIdInputDto) {
        const result = await this.dataBaseService.find({
            where: data.id_produto
                ? { id: data.id_produto, deleted_at: IsNull() }
                : { deleted_at: IsNull() },
        });

        return result ?? [];
    }
}
