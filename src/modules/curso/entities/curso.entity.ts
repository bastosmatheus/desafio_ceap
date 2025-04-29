import { Matricula } from 'src/modules/matricula/entities/matricula.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '100' })
  nome: string;

  @Column({ type: 'varchar', length: '50' })
  tipo: string;

  @OneToMany(() => Matricula, (matricula) => matricula.curso_id)
  matriculas: Matricula[];
}
