import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/auth/controller/auth.controller';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { AuthService } from './service/login.service';
import { PostUsuarioRepository } from 'src/usuario/services/postUsuario/repository/postUsuario.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsuarioEntity]),
        JwtModule.register({
            global: true,
            secret: 'SEGREDO_SEGREDO',
            signOptions: { expiresIn: '72h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, PostUsuarioRepository],
})
export class AuthModuleService {}

