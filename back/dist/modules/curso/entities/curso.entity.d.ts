import { Matricula } from 'src/modules/matricula/entities/matricula.entity';
export declare class Curso {
    id: number;
    nome: string;
    tipo: string;
    matriculas: Matricula[];
}
