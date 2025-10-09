import { Controller, Get, Post, Query } from '@nestjs/common';
import { PedidoService } from '../services/postPedido/service/postPedido.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { GetPedidoService } from '../services/getPedido/service/getPedido.service';
import { GetPedidoInputDto } from '../services/getPedido/dto/getPedidoInputDto';

@Controller('pedidos')
export class PedidoController {
    constructor(
        private readonly pedidoService: PedidoService,
        private readonly getPedidoService: GetPedidoService,
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
    async buscaProduto(@Query() data: GetPedidoInputDto) {
        return await this.getPedidoService.execute(data);
    }
}
