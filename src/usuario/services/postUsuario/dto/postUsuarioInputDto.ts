import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class PostUsuarioInputDto {
    //acho que não é necessario
    @IsUUID()
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    senha: string;
}
