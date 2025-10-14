import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosEntity } from '../entity/pedido.entity';
import { Module } from '@nestjs/common';
import { PedidoController } from '../controller/pedido.controller';
import { PedidoService } from './postPedido/service/postPedido.service';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { GetPedidoService } from './getPedido/service/getPedido.service';
import { GetPedidoRepository } from './getPedido/repository/getPedido.repository';
import { ItemPedidoEntity } from '../entity/itemPedido.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PedidosEntity,
            UsuarioEntity,
            ItemPedidoEntity,
        ]),
    ],
    controllers: [PedidoController],
    providers: [PedidoService, GetPedidoService, GetPedidoRepository],
})
export class PedidosServiceModule {}
