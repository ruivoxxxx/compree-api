import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { GetProdutosService } from '../services/getProdutos/service/getProdutos.service';
import { GetProdutosInputDto } from '../services/getProdutos/dto/getProdutosInputDto';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { PostProdutosInputDto } from '../services/postProdutos/dto/postProdutosInputDto';
import { PostProdutosService } from '../services/postProdutos/service/postProdutos.service';
import { ProdutoEntity } from '../entity/produto.entity';
import { randomUUID } from 'crypto';
import { PutProdutoInputDto } from '../services/putProduto/dto/putProdutoInputDto';
import { PutProdutoService } from '../services/putProduto/service/putProduto.service';

@Controller('produto')
export class ProdutoController {
    constructor(
        private readonly getProdutos: GetProdutosService,
        private readonly postProdutosService: PostProdutosService,
        private readonly putProdutosService: PutProdutoService,
    ) {}

    @Get()
    @ApiOperation({ summary: 'Lista Produtos' })
    @ApiOkResponse({
        description: 'Produtos Listados com sucesso!',
    })
    async listProduto() {
        return await this.getProdutos.execute();
    }

    @Post()
    @ApiOperation({ summary: 'Produto será criado' })
    @ApiOkResponse({ description: 'Produto criado com sucesso!' })
    async createProduto(@Body() data: PostProdutosInputDto) {
        const produto = new ProdutoEntity();
        produto.id = randomUUID();
        produto.id_usuario = data.id_usuario;
        produto.nome = data.nome;
        produto.valor = data.valor;
        produto.quantidade = data.quantidade;
        produto.descricao = data.descricao;
        produto.categoria = data.categoria;

        await this.postProdutosService.execute(data);

        // analisar uma melhor abordagem para a criação do produto
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Produto será atualizado' })
    @ApiOkResponse({ description: 'Produto atualizado com sucesso!' })
    async updateProduto(
        @Param('id') id: string,
        @Body() data: PutProdutoInputDto,
    ) {
        await this.putProdutosService.execute(id, data);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Produto deletado criado' })
    @ApiOkResponse({ description: 'Produto deletado com sucesso!' })
    async deleteProduto(@Param('id') id: string) {}
}
