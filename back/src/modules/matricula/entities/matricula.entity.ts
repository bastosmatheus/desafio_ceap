import { Aluno } from 'src/modules/aluno/entities/aluno.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('matriculas')
export class Matricula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  data_matricula: Date;

  @Column({ type: 'varchar', length: '20' })
  status: string;

  @Column()
  curso_id: number;

  @ManyToOne(() => Curso, (curso) => curso)
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column()
  aluno_id: number;

  @ManyToOne(() => Aluno, (aluno) => aluno)
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;
}
