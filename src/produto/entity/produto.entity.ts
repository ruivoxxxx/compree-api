import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProdutoCaracteristicaEntity } from './produto-caracteristica.entity';
import { ProdutoImagemEntity } from './produto-imagem.entity';
@Entity({ name: 'produtos' })
export class ProdutoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'id_usuario', length: '255', nullable: false })
    id_usuario: string;

    @Column({ name: 'nome', length: '255', nullable: false })
    nome: string;

    @Column({ name: 'valor', nullable: false })
    valor: number;

    @Column({ name: 'quantidade', nullable: false })
    quantidade: number;

    @Column({ name: 'descricao', length: '255', nullable: false })
    descricao: string;

    @Column({ name: 'categoria', length: '100', nullable: false })
    categoria: string;

    // @OneToMany(
    //     () => ProdutoCaracteristicaEntity,
    //     (produtoCaracteristicaEntity) => produtoCaracteristicaEntity.produto,
    //     { cascade: true, eager: true },
    // )
    // caracteristica: ProdutoCaracteristicaEntity[];

    // @OneToMany(
    //     () => ProdutoImagemEntity,
    //     (produtoImagemEntity) => produtoImagemEntity.produto,
    //     { cascade: true, eager: true },
    // )
    // imagem: ProdutoImagemEntity[];

    // @CreateDateColumn({ name: 'created_at' })
    // created_at;

    @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updated_at;

    @CreateDateColumn({ name: 'deleted_at' })
    deleted_at;
}
