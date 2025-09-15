import { Module } from '@nestjs/common';
import { ProdutoServiceModule } from './services/produtoService.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './entity/produto.entity';

@Module({
    imports: [ProdutoServiceModule],
    exports: [ProdutoServiceModule],
})
export class ProdutoModule {}
