import { Matricula } from 'src/modules/matricula/entities/matricula.entity';
export declare class Aluno {
    id: number;
    nome: string;
    email: string;
    data_nascimento: Date;
    ativo: boolean;
    matriculas: Matricula[];
}
