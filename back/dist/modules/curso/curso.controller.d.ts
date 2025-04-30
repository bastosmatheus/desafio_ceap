import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateTipoCursoDto } from './dto/update-curso.dto';
export declare class CursoController {
    private readonly cursoService;
    constructor(cursoService: CursoService);
    create(createCursoDto: CreateCursoDto): Promise<import("./entities/curso.entity").Curso>;
    getAll(): Promise<import("./entities/curso.entity").Curso[]>;
    getById(id: number): Promise<import("./entities/curso.entity").Curso>;
    updateTipoCurso(id: number, updateTipoCursoDto: UpdateTipoCursoDto): Promise<import("./entities/curso.entity").Curso>;
    remove(id: number): Promise<import("./entities/curso.entity").Curso>;
}
