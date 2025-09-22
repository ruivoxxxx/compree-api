import { Module } from '@nestjs/common';
import { UsuarioController } from '../controller/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from '../entity/usuario.entity';
import { GetUsuarioService } from './getUsuario/service/getUsuario.service';
import { PostUsuarioService } from './postUsuario/service/postUsuario.service';
import { PutUsuarioService } from './putUsuario/service/putUsuario.service';
import { DeleteUsuarioService } from './deleteUsuario/service/deleteUsuario.service';
import { PostUsuarioRepository } from './postUsuario/repository/postUsuarioRepository';
import { GetUsuarioByIdService } from './getUsuarioById/service/getUsuarioById.service';
import { GetUsuarioByIdRepository } from './getUsuarioById/repository/getUsuarioByIdRepository';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [
        GetUsuarioService,
        GetUsuarioByIdService,
        GetUsuarioByIdRepository,
        PostUsuarioService,
        PostUsuarioRepository,
        PutUsuarioService,
        DeleteUsuarioService,
    ],
})
export class UsuarioModuleService {}
