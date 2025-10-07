import { Controller, Get, Post, Query } from '@nestjs/common';
import { PedidoService } from '../services/postPedido/service/pedido.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { GetPedidoByIdService } from '../services/getPedidoById/service/getPedidoById.service';
import { GetPedidoByIdInputDto } from '../services/getPedidoById/dto/getProdutoByIdInputDto';

@Controller('pedidos')
export class PedidoController {
    constructor(
        private readonly pedidoService: PedidoService,
        private readonly getPedidoByIdService: GetPedidoByIdService,
    ) {}

    @Post('')
    @ApiOperation({ summary: 'Criação de Pedido' })
    @ApiOkResponse({ description: 'Pedido criado com sucesso!' })
    async criaPedidos(@Query('usuario_id') usuario_id: string) {
        return await this.pedidoService.execute(usuario_id);
    }

    @Get('')
    @ApiOperation({ summary: 'Busca de pedido por Id' })
    @ApiOkResponse({ description: 'Pedido encontrado com sucessopo!' })
    async buscaProduto(@Query() data: GetPedidoByIdInputDto) {
        return await this.getPedidoByIdService.execute(data);
    }
}
