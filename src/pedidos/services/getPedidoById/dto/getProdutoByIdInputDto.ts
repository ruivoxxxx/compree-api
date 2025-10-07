import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetPedidoByIdInputDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    id_produto: string;
}
