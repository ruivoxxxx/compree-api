import { ApiProperty } from '@nestjs/swagger';

export class GetUsuarioByIdInputDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    senha: string;
}
