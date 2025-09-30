import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';
import { IsNull, Repository } from 'typeorm';
import { PostProdutoInputDto } from '../dto/postProdutosInputDto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PostProdutoRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly dataBaseService: Repository<ProdutoEntity>,
    ) {}

    async verificaProduto(data: PostProdutoInputDto) {
        return await this.dataBaseService.findOne({
            select: ['nome'],
            where: { nome: data.nome, deleted_at: IsNull() },
        });
    }

    async criaProduto(data: PostProdutoInputDto) {
        await this.dataBaseService
            .createQueryBuilder()
            .insert()
            .into(ProdutoEntity)
            .values({
                nome: () => 'UPPER(:nome)',
                valor: data.valor,
                quantidade: data.quantidade,
                descricao: data.descricao,
                categoria: data.categoria,
            })
            .setParameters({ nome: data.nome })
            .execute();
    }
}
