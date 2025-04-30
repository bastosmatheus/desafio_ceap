import { CreateCursoDto } from './dto/create-curso.dto';
import { CursoRepository } from './curso.repository';
import { UpdateTipoCursoDto } from './dto/update-curso.dto';
export declare class CursoService {
    private cursoRepository;
    constructor(cursoRepository: CursoRepository);
    getAll(): Promise<import("./entities/curso.entity").Curso[]>;
    getById(id: number): Promise<import("./entities/curso.entity").Curso>;
    create(createCursoDto: CreateCursoDto): Promise<import("./entities/curso.entity").Curso>;
    updateTipoCurso(id: number, updateTipoCursoDto: UpdateTipoCursoDto): Promise<import("./entities/curso.entity").Curso>;
    remove(id: number): Promise<import("./entities/curso.entity").Curso>;
}
