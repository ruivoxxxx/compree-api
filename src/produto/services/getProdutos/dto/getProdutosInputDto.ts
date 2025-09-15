import { ApiProperty } from '@nestjs/swagger';

export class GetProdutosInputDto {
    constructor(
        readonly id: string,
        readonly nome: string,
    ) {}
}
