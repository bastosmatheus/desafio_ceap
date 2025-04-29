import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-curso.dto';

@Injectable()
export class CursoRepository {
  constructor(
    @InjectRepository(Curso) private cursoRepository: Repository<Curso>,
  ) {}

  public async getAll() {
    const cursos = await this.cursoRepository.find();

    return cursos;
  }

  public async getById(id: number) {
    const cursos = await this.cursoRepository.findOneBy({
      id,
    });

    return cursos;
  }

  public async create(createCursoDto: CreateCursoDto) {
    const cursoCreated = this.cursoRepository.create(createCursoDto);

    const cursoSaved = await this.cursoRepository.save(cursoCreated);

    return cursoSaved;
  }

  public async update(curso: Curso) {
    const cursoUpdated = await this.cursoRepository.save(curso);

    return cursoUpdated;
  }

  public async delete(curso: Curso) {
    const cursoDeleted = await this.cursoRepository.remove(curso);

    return cursoDeleted;
  }
}
