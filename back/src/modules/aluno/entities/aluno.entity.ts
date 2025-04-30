import { Matricula } from 'src/modules/matricula/entities/matricula.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alunos')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '100' })
  nome: string;

  @Column({ type: 'varchar', length: '100' })
  email: string;

  @Column({ type: 'date' })
  data_nascimento: Date;

  @Column({ type: 'tinyint', default: 1 })
  ativo: boolean;

  @OneToMany(() => Matricula, (matricula) => matricula.aluno_id)
  matriculas: Matricula[];
}
