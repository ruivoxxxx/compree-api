import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { PostProdutoService } from '../services/postUsuario/service/postUsuario.service';
import { UsuarioEntity } from '../entity/usuario.entity';
import {
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { GetUsuarioService } from '../services/getUsuario/service/getUsuario.service';
@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly postUsuarioService: PostProdutoService,
        private readonly getUsuarioService: GetUsuarioService,
    ) {}

    @Post('')
    @ApiOperation({ summary: 'Criação de usuário' })
    @ApiOkResponse({ description: 'Usuário criado com sucesso' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async createUsuario(@Body() data: UsuarioEntity) {
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
    async putUsuario(@Param('id') id: string /*@Body() data:*/) {}

    @Delete('id')
    @ApiOperation({ summary: 'Deleta informações de Usuário' })
    @ApiOkResponse({ description: 'Usuário Deletado Com Sucesso!' })
    @ApiInternalServerErrorResponse({ description: 'Erro no Banco de Dados' })
    async deleteUsuario(@Param('id') id: string) {}
}

