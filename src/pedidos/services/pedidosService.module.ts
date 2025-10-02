import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosEntity } from '../entity/pedidos.entity';
import { Module } from '@nestjs/common';
import { PedidosController } from '../controller/pedidos.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PedidosEntity])],
    controllers: [PedidosController],
    providers: [],
})
export class PedidosServiceModule {}
