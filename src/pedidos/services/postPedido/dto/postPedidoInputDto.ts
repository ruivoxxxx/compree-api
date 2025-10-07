import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';

export class PedidoInputDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    valor_total: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    status: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    itens_pedido: string;

    @ApiProperty()
    usuario: UsuarioEntity;
}
