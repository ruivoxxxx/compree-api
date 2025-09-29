import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('produto_imagens')
export class ProdutoImagemEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;

  // @ManyToOne(() => ProdutoEntity, (produto) => produto.caracteristica,{orphanedRowAction:'delete',onDelete:'CASCADE',onUpdate:'CASCADE'})
  // produto: ProdutoEntity;
}
