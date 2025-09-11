import { Controller, Get, Query } from '@nestjs/common';
import { GetProdutosService } from '../services/getProdutos/service/getProdutos.service';
import { GetProdutosInputDto } from '../services/getProdutos/dto/getProdutosInputDto';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly getProdutos: GetProdutosService) {}

    @Get()
    @ApiOperation({ summary: 'Lista Produtos' })
    @ApiOkResponse({
        description: 'Produtos Listados com sucesso!',
    })
    async listProdutos(@Query() data: GetProdutosInputDto) {
        return await this.getProdutos.execute(data);
    }
}
