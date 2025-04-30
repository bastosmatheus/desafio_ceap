import { Aluno } from 'src/modules/aluno/entities/aluno.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
export declare class Matricula {
    id: number;
    data_matricula: Date;
    status: string;
    curso_id: number;
    curso: Curso;
    aluno_id: number;
    aluno: Aluno;
}
