import { ApiProperty } from '@nestjs/swagger';

export class GetProdutoByIdOutPutDto {
    constructor() // readonly id: string,
    // readonly id_usuario: string,
    // readonly nome: string,
    // readonly valor: number,
    // readonly descricao: string,
    // readonly quantidade: number,
    // readonly categoria: string,
    {}

    @ApiProperty()
    id: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    valor: number;

    @ApiProperty()
    descricao: string;

    @ApiProperty()
    categoria;
}
