import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { randomUUID } from 'crypto';

export class PostUsuarioInputDto {
    //acho que não é necessario

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
