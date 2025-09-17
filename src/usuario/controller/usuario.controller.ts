import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

import { UsuarioEntity } from '../entity/usuario.entity';
import {
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { GetUsuarioService } from '../services/getUsuario/service/getUsuario.service';
import { PostUsuarioService } from '../services/postUsuario/service/postUsuario.service';
import { PostUsuarioInputDto } from '../services/postUsuario/dto/postUsuarioInputDto';
import { PutProdutoInputDto } from 'src/produto/services/putProduto/dto/putProdutoInputDto';
import { PutUsuarioInputDto } from '../services/putUsuario/dto/putUsuarioInputDto';
import { PutUsuarioService } from '../services/putUsuario/service/putUsuario.service';
import { DeleteUsuarioService } from '../services/deleteUsuario/service/deleteUsuario.service';
@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly postUsuarioService: PostUsuarioService,
        private readonly getUsuarioService: GetUsuarioService,
        private readonly putUsuarioService: PutUsuarioService,
        private readonly deleteUsuarioService: DeleteUsuarioService,
    ) {}

    @Post('')
    @ApiOperation({ summary: 'Criação de usuário' })
    @ApiOkResponse({ description: 'Usuário criado com sucesso' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async createUsuario(@Body() data: PostUsuarioInputDto) {
        const usuario = new UsuarioEntity();

        usuario.id = randomUUID();
        usuario.nome = data.nome;
        usuario.senha = data.senha;
        usuario.email = data.email;

        await this.postUsuarioService.execute(data);
    }

    @Get('')
    @ApiOperation({ summary: 'Lista os usuários existentes' })
    @ApiOkResponse({ description: 'Usuários Listados Com Sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async listUsuario() {
        return await this.getUsuarioService.execute();
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
