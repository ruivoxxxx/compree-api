import { StatusPedido } from '../../enum/statuspedido.enum';
import { UsuarioEntity } from '../../usuario/entity/usuario.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'pedidos' })
export class PedidosEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'valor_total', length: 255, nullable: false })
    valor_total: string;

    @Column({ name: 'status', enum: StatusPedido, nullable: false })
    status: StatusPedido;

    @Column({ name: 'itens_pedido', length: 255, nullable: false })
    itens_pedido: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at;

    @CreateDateColumn({ name: 'updated_at' })
    updated_at;

    @CreateDateColumn({ name: 'deleted_at' })
    deleted_at;

    @ManyToOne(() => UsuarioEntity, (usuario) => usuario.pedidos)
    usuario: UsuarioEntity;
}
