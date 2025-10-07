import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { ProdutoController } from './produto/controller/produto.controller';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useClass: PostgresConfigService,
            inject: [PostgresConfigService],
        }),
        ProdutoModule,
        UsuarioModule,
        PedidosModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
