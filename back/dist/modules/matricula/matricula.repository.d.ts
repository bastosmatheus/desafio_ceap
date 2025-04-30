import { Matricula } from './entities/matricula.entity';
import { Repository } from 'typeorm';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
export declare class MatriculaRepository {
    private matriculaRepository;
    constructor(matriculaRepository: Repository<Matricula>);
    getAll(): Promise<Matricula[]>;
    getById(id: number): Promise<Matricula | null>;
    create(createMatriculaDto: CreateMatriculaDto): Promise<Matricula>;
    update(matricula: Matricula): Promise<Matricula>;
    delete(matricula: Matricula): Promise<Matricula>;
}
