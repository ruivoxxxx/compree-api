import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    Min,
} from 'class-validator';

export class PostProdutosInputDto {
    @IsUUID()
    id: string;

    @ApiProperty()
    usuarioId: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Nome do Produto não pode ser vazio' })
    @IsString()
    nome: string;

    @ApiProperty({})
    @IsNumber()
    @IsNotEmpty({ message: 'Valor do Produto não pode ser vazio' })
    @Min(1, { message: 'O valor precisa ser maior que 0' })
    valor: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({ message: 'Quantidade do Produto não pode ser vazio' })
    @Min(1, { message: 'O valor precisa ser maior que 0' })
    quantidade: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    descricao: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: 'Categoria do Produto não pode ser vazio' })
    categoria: string;
}
