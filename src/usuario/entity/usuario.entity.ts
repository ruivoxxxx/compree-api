import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'nome', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 255, nullable: false })
  email: string;

  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at;
}
