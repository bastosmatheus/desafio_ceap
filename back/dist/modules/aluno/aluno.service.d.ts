import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunoRepository } from './aluno.repository';
export declare class AlunoService {
    private alunoRepository;
    constructor(alunoRepository: AlunoRepository);
    getAll(): Promise<import("./entities/aluno.entity").Aluno[]>;
    getById(id: number): Promise<import("./entities/aluno.entity").Aluno>;
    create(createAlunoDto: CreateAlunoDto): Promise<import("./entities/aluno.entity").Aluno>;
    update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<import("./entities/aluno.entity").Aluno>;
    remove(id: number): Promise<import("./entities/aluno.entity").Aluno>;
}
