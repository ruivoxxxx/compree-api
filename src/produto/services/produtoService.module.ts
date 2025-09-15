import { Module } from '@nestjs/common';
import { ProdutoController } from '../controller/produto.controller';
import { GetProdutosService } from './getProdutos/service/getProdutos.service';
import { ProdutoEntity } from '../entity/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostProdutosService } from './postProdutos/service/postProdutos.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProdutoEntity])],
    controllers: [ProdutoController],
    providers: [GetProdutosService, PostProdutosService],
})
export class ProdutoServiceModule {}
