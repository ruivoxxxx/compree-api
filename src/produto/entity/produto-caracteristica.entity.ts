import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity('produto-caracteristica')
export class ProdutoCaracteristica {
  @Column({ name: 'nome', length: 100 })
  nome: string;

  @Column({ name: 'descricao', length: 255 })
  descricao: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at;
}
