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

@Controller('produto')
export class ProdutoController {
    constructor(
        private readonly getProdutos: GetProdutosService,
        private readonly postProdutosService: PostProdutosService,
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
        return await this.postProdutosService.execute(data);

        // analisar uma melhor abordagem para a criação do produto
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Produto será atualizado' })
    @ApiOkResponse({ description: 'Produto atualizado com sucesso!' })
    async updateProduto(@Param('id') id: string /*@Body()*/) {}

    @Delete('/:id')
    @ApiOperation({ summary: 'Produto deletado criado' })
    @ApiOkResponse({ description: 'Produto deletado com sucesso!' })
    async deleteProduto(@Param('id') id: string) {}
}
