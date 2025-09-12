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

@Controller('produto')
export class ProdutoController {
    constructor(private readonly getProdutos: GetProdutosService) {}

    @Get()
    @ApiOperation({ summary: 'Lista Produtos' })
    @ApiOkResponse({
        description: 'Produtos Listados com sucesso!',
    })
    async listProduto(@Query() data: GetProdutosInputDto) {
        return await this.getProdutos.execute(data);
    }

    @Post()
    @ApiOperation({ summary: 'Produto será criado' })
    @ApiOkResponse({ description: 'Produto criado com sucesso!' })
    async createProduto(@Body() data: PostProdutosInputDto) {}

    @Put('/:id')
    @ApiOperation({ summary: 'Produto será atualizado' })
    @ApiOkResponse({ description: 'Produto atualizado com sucesso!' })
    async updateProduto(@Param('id') id: string /*@Body()*/) {}

    @Delete('/:id')
    @ApiOperation({ summary: 'Produto deletado criado' })
    @ApiOkResponse({ description: 'Produto deletado com sucesso!' })
    async deleteProduto(@Param('id') id: string) {}
}
