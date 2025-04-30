import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateStatusMatriculaDto } from './dto/update-matricula.dto';
export declare class MatriculaController {
    private readonly matriculaService;
    constructor(matriculaService: MatriculaService);
    create(createMatriculaDto: CreateMatriculaDto): Promise<import("./entities/matricula.entity").Matricula>;
    getAll(): Promise<import("./entities/matricula.entity").Matricula[]>;
    findOne(id: number): Promise<import("./entities/matricula.entity").Matricula>;
    updateStatusMatricula(id: number, updateStatusMatriculaDto: UpdateStatusMatriculaDto): Promise<import("./entities/matricula.entity").Matricula>;
    remove(id: number): Promise<import("./entities/matricula.entity").Matricula>;
}
