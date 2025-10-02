import { ApiProperty } from '@nestjs/swagger';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';

export class PedidosInputDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    valor_total: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    itens_pedido: string;

    @ApiProperty()
    usuario: UsuarioEntity;
}
