import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Pool } from 'pg';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}
    createTypeOrmOptions(
        connectionName?: string,
    ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USERNAME'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [ProdutoEntity],
            synchronize: false,
        };
    }
}
export const pool = new Pool({
    user: 'DB_USERNAME',
    host: 'DB_HOST',
    database: 'DB_NAME',
    password: 'DB_PASSWORD',
    port: 5432,
});

