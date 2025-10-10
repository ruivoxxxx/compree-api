import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { PedidosEntity } from './pedido.entity';
import { ProdutoEntity } from 'src/produto/entity/produto.entity';

@Entity({ name: 'pedidos' })
export class ItemPedidoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'quantidade', nullable: false })
    quantidade: number;

    @Column({ name: 'preco_venda', nullable: false })
    preco_venda?: number;

    @OneToMany(() => PedidosEntity, (pedido) => pedido.itemPedido, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    pedido: PedidosEntity;

    @ManyToOne(() => ProdutoEntity, (produto) => produto.itemPedido, {
        cascade: ['update'],
    })
    produto?: ProdutoEntity;
}

