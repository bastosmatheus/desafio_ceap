import { Aluno } from './entities/aluno.entity';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
export declare class AlunoRepository {
    private alunoRepository;
    constructor(alunoRepository: Repository<Aluno>);
    getAll(): Promise<Aluno[]>;
    getById(id: number): Promise<Aluno | null>;
    create(createAlunoDto: CreateAlunoDto): Promise<Aluno>;
    update(aluno: Aluno): Promise<Aluno>;
    delete(aluno: Aluno): Promise<Aluno>;
}
