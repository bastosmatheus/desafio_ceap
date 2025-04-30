import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { MatriculaRepository } from './matricula.repository';
import { UpdateStatusMatriculaDto } from './dto/update-matricula.dto';
export declare class MatriculaService {
    private matriculaRepository;
    constructor(matriculaRepository: MatriculaRepository);
    getAll(): Promise<import("./entities/matricula.entity").Matricula[]>;
    getById(id: number): Promise<import("./entities/matricula.entity").Matricula>;
    create(createMatriculaDto: CreateMatriculaDto): Promise<import("./entities/matricula.entity").Matricula>;
    updateStatusMatricula(id: number, updateStatusMatriculaDto: UpdateStatusMatriculaDto): Promise<import("./entities/matricula.entity").Matricula>;
    remove(id: number): Promise<import("./entities/matricula.entity").Matricula>;
}
