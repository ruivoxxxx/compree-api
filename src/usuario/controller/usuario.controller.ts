import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

import {
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';

import { GetUsuarioService } from '../services/getUsuario/service/getUsuario.service';
import { PostUsuarioService } from '../services/postUsuario/service/postUsuario.service';
import { PostUsuarioInputDto } from '../services/postUsuario/dto/postUsuarioInputDto';
import { PutProdutoInputDto } from 'src/produto/services/putProduto/dto/putProdutoInputDto';
import { PutUsuarioInputDto } from '../services/putUsuario/dto/putUsuarioInputDto';
import { PutUsuarioService } from '../services/putUsuario/service/putUsuario.service';
import { DeleteUsuarioService } from '../services/deleteUsuario/service/deleteUsuario.service';
import { GetUsuarioByIdService } from '../services/getUsuarioById/service/getUsuarioById.service';
@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly postUsuarioService: PostUsuarioService,
        private readonly getUsuarioService: GetUsuarioService,
        private readonly getUsuarioByIdService: GetUsuarioByIdService,
        private readonly putUsuarioService: PutUsuarioService,
        private readonly deleteUsuarioService: DeleteUsuarioService,
    ) {}

    @Post('')
    @ApiOperation({ summary: 'Criação de usuário' })
    @ApiOkResponse({ description: 'Usuário criado com sucesso' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async createUsuario(@Body() data: PostUsuarioInputDto) {
        await this.postUsuarioService.execute(data);
    }

    @Get('')
    @ApiOperation({ summary: 'Lista os usuários existentes' })
    @ApiOkResponse({ description: 'Usuários Listados Com Sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async listUsuario() {
        return await this.getUsuarioService.execute();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Lista os usuários existentes' })
    @ApiOkResponse({ description: 'Usuários Listados Com Sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async listUsuarioById(@Param('id') id: string) {
        return await this.getUsuarioByIdService.execute(id);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Atualiza informações de Usuário' })
    @ApiOkResponse({ description: 'Usuário Atualizado Com Sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async putUsuario(
        @Param('id') id: string,
        @Body() data: PutUsuarioInputDto,
    ) {
        await this.putUsuarioService.execute(id, data);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Deleta informações de Usuário' })
    @ApiOkResponse({ description: 'Usuário Deletado Com Sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async deleteUsuario(@Param('id') id: string) {
        await this.deleteUsuarioService.execute(id);
    }
}
