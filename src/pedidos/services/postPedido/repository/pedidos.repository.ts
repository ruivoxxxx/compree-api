import { InjectRepository } from '@nestjs/typeorm';
import { PedidosEntity } from 'src/pedidos/entity/pedidos.entity';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { IsNull, Repository } from 'typeorm';
import { PedidosInputDto } from '../dto/pedidosInputDto';
import { StatusPedido } from 'src/enum/statuspedido.enum';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PedidosRepository {
    constructor(
        @InjectRepository(PedidosEntity)
        private readonly pedidoRepository: Repository<PedidosEntity>,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async buscaUsuario(id: string) {
        return await this.usuarioRepository.findOne({
            select: ['id'],
            where: { id: id, deleted_at: IsNull() },
        });
    }

    async criaPedido(data: PedidosInputDto) {
        return await this.pedidoRepository
            .createQueryBuilder()
            .insert()
            .into(PedidosEntity)
            .values({
                valor_total: data.valor_total,
                status: StatusPedido.EM_PROCESSAMENTO,
                itens_pedido: data.itens_pedido,
                usuario: data.usuario,
            })
            .execute();
    }
}
