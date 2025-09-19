import { ApiProperty } from '@nestjs/swagger';

export class GetProdutosOutPutDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    id_usuario: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    valor: number;

    @ApiProperty()
    descricao: string;

    @ApiProperty()
    quantidade: number;

    categoria: string;
}
