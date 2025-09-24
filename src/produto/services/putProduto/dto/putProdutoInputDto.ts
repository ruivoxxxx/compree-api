import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    ValidateNested,
} from 'class-validator';
import {
    CaracteristicaProdutoDTO,
    ImagemProdutoDTO,
} from '../../postProdutos/dto/postProdutosInputDto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn } from 'typeorm';

export class PutProdutoInputDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Id do produto não pode ser vazio' })
    @IsString()
    id: string;

    @ApiProperty()
    @IsOptional()
    id_usuario: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    @IsOptional()
    nome: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @IsOptional()
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    @IsOptional()
    valor: number;

    @ApiProperty()
    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    @IsOptional()
    quantidadeDisponivel: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    descricao: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    @IsOptional()
    categoria: string;

    // @ApiProperty()
    // @IsOptional()
    // updated_at: Date;

    @ApiProperty()
    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    @IsOptional()
    caracteristicas: CaracteristicaProdutoDTO[];

    @ApiProperty()
    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    @IsOptional()
    imagens: ImagemProdutoDTO[];
}
