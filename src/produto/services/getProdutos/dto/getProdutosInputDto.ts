import { ApiProperty } from '@nestjs/swagger';

export class GetProdutosInputDto {
    @ApiProperty()
    page: number;

    @ApiProperty()
    size: number;
}
