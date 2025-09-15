import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    IsUUID,
    Min,
} from 'class-validator';
import { Entity } from 'typeorm';
export class CaracteristicaProdutoDTO {
    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    nome: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    descricao: string;
}

export class ImagemProdutoDTO {
    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    descricao: string;
}
export class PostProdutosInputDto {
    @IsUUID()
    id: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Id de Usuário não pode ser vazio' })
    @IsNumber()
    id_usuario: string;

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
