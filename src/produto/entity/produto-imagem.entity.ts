import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity('produto_imagem')
export class ProdutoImagem {
  @Column({ name: 'url', length: 100 })
  url: string;
  @Column({ name: 'descricao', length: 255 })
  descricao: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at;
}
