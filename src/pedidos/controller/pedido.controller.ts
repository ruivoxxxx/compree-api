import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PedidoService } from '../services/postPedido/service/postPedido.service';
import {
    ApiInternalServerErrorResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { GetPedidoService } from '../services/getPedido/service/getPedido.service';
import { GetPedidoInputDto } from '../services/getPedido/dto/getPedidoInputDto';
import { PostPedidoInputDto } from '../services/postPedido/dto/postPedidoInputDto';

@Controller('pedidos')
export class PedidoController {
    constructor(
        private readonly pedidoService: PedidoService,
        private readonly getPedidoService: GetPedidoService,
    ) {}

    @Post('')
    @ApiOperation({ summary: 'Criação de Pedido' })
    @ApiOkResponse({ description: 'Pedido criado com sucesso!' })
    @ApiNotFoundResponse({
        description: 'Usuário não encontrado || Produto não encontrado',
    })
    @ApiInternalServerErrorResponse({ description: 'Erro no banco de dados' })
    async criaPedidos(
        @Query('usuario_id') usuario_id: string,
        @Body() data: PostPedidoInputDto,
    ) {
        return await this.pedidoService.execute(usuario_id, data);
    }

    @Get('')
    @ApiOperation({ summary: 'Busca de pedido por Id' })
    @ApiOkResponse({ description: 'Pedido encontrado com sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no banco de dados' })
    async buscaProduto(@Query() data: GetPedidoInputDto) {
        return await this.getPedidoService.execute(data);
    }
}
