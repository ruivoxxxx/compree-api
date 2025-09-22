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
import {
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { PostProdutosInputDto } from '../services/postProdutos/dto/postProdutosInputDto';
import { PostProdutosService } from '../services/postProdutos/service/postProdutos.service';
import { PutProdutoInputDto } from '../services/putProduto/dto/putProdutoInputDto';
import { PutProdutoService } from '../services/putProduto/service/putProduto.service';
import { GetProdutosByIdService } from '../services/getProdutosById/service/getProdutosById.service';
import { GetProdutosOutPutDto } from '../services/getProdutos/dto/getProdutosOutPut.dto';

@Controller('produto')
export class ProdutoController {
    constructor(
        private readonly getProdutos: GetProdutosService,
        private readonly postProdutosService: PostProdutosService,
        private readonly putProdutosService: PutProdutoService,
        private readonly getProdutosByIdService: GetProdutosByIdService,
    ) {}

    @Get()
    @ApiOperation({ summary: 'Lista Produtos' })
    @ApiOkResponse({
        description: 'Produtos Listados com sucesso!',
    })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async listProduto(): Promise<GetProdutosOutPutDto[]> {
        return await this.getProdutos.execute();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Lista Produtos' })
    @ApiOkResponse({
        description: 'Produtos Listados com sucesso!',
    })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async listByIdProduto(@Param('id') id: string) {
        return await this.getProdutosByIdService.execute(id);
    }

    @Post()
    @ApiOperation({ summary: 'Produto será criado' })
    @ApiOkResponse({ description: 'Produto criado com sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async createProduto(@Body() data: PostProdutosInputDto) {
        await this.postProdutosService.execute(data);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Produto será atualizado' })
    @ApiOkResponse({ description: 'Produto atualizado com sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async updateProduto(
        @Param('id') id: string,
        @Body() data: PutProdutoInputDto,
    ) {
        await this.putProdutosService.execute(id, data);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Produto deletado criado' })
    @ApiOkResponse({ description: 'Produto deletado com sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async deleteProduto(@Param('id') id: string) {}
}
