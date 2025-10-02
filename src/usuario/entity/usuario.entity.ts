import { PedidosEntity } from '../../pedidos/entity/pedidos.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'nome', length: 255, nullable: true })
    nome: string;

    @Column({ name: 'email', length: 255, nullable: true })
    email: string;

    @Column({ name: 'senha', length: 255, nullable: true })
    senha: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at;

    @CreateDateColumn({ name: 'updated_at' })
    updated_at;

    @CreateDateColumn({ name: 'deleted_at', nullable: true })
    deleted_at;

    @OneToMany(() => PedidosEntity, (pedido) => pedido.usuario)
    pedidos: PedidosEntity[];
}
