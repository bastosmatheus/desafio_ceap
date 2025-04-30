import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-curso.dto';
export declare class CursoRepository {
    private cursoRepository;
    constructor(cursoRepository: Repository<Curso>);
    getAll(): Promise<Curso[]>;
    getById(id: number): Promise<Curso | null>;
    create(createCursoDto: CreateCursoDto): Promise<Curso>;
    update(curso: Curso): Promise<Curso>;
    delete(curso: Curso): Promise<Curso>;
}
