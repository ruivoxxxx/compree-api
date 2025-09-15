import { Module } from '@nestjs/common';
import { UsuarioController } from '../controller/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from '../entity/usuario.entity';
import { GetUsuarioService } from './getUsuario/service/getUsuario.service';
import { PostUsuarioService } from './postUsuario/service/postUsuario.service';
import { PutUsuarioService } from './putUsuario/service/putUsuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [GetUsuarioService, PostUsuarioService, PutUsuarioService],
})
export class UsuarioModuleService {}

