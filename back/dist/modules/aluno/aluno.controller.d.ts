import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunoController {
    private readonly alunoService;
    constructor(alunoService: AlunoService);
    create(createAlunoDto: CreateAlunoDto): Promise<import("./entities/aluno.entity").Aluno>;
    getAll(): Promise<import("./entities/aluno.entity").Aluno[]>;
    getById(id: number): Promise<import("./entities/aluno.entity").Aluno>;
    update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<import("./entities/aluno.entity").Aluno>;
    remove(id: number): Promise<import("./entities/aluno.entity").Aluno>;
}
