import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matricula } from './entities/matricula.entity';
import { Repository } from 'typeorm';
import { CreateMatriculaDto } from './dto/create-matricula.dto';

@Injectable()
export class MatriculaRepository {
  constructor(
    @InjectRepository(Matricula)
    private matriculaRepository: Repository<Matricula>,
  ) {}

  public async getAll() {
    const matriculas = await this.matriculaRepository.find();

    return matriculas;
  }

  public async getById(id: number) {
    const matriculas = await this.matriculaRepository.findOneBy({
      id,
    });

    return matriculas;
  }

  public async create(createMatriculaDto: CreateMatriculaDto) {
    const matriculaCreated =
      this.matriculaRepository.create(createMatriculaDto);

    const matriculaSaved =
      await this.matriculaRepository.save(matriculaCreated);

    return matriculaSaved;
  }

  public async update(matricula: Matricula) {
    const matriculaUpdated = await this.matriculaRepository.save(matricula);

    return matriculaUpdated;
  }

  public async delete(matricula: Matricula) {
    const matriculaDeleted = await this.matriculaRepository.remove(matricula);

    return matriculaDeleted;
  }
}
