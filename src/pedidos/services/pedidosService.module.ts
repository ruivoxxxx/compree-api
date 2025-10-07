import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosEntity } from '../entity/pedido.entity';
import { Module } from '@nestjs/common';
import { PedidoController } from '../controller/pedido.controller';
import { PedidoService } from './postPedido/service/postPedido.service';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { GetPedidoByIdRepository } from './getPedidoById/repository/getPedidoById.repository';
import { GetPedidoByIdService } from './getPedidoById/service/getPedidoById.service';

@Module({
    imports: [TypeOrmModule.forFeature([PedidosEntity, UsuarioEntity])],
    controllers: [PedidoController],
    providers: [PedidoService, GetPedidoByIdService, GetPedidoByIdRepository],
})
export class PedidosServiceModule {}
