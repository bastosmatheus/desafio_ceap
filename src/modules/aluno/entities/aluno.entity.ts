import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alunos')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  curso: string;

  @Column({ type: 'date' })
  data_nascimento: Date;

  @Column({ type: 'tinyint', default: 1 })
  ativo: boolean;
}
