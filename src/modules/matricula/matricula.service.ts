import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { MatriculaRepository } from './matricula.repository';
import { UpdateStatusMatriculaDto } from './dto/update-matricula.dto';

@Injectable()
export class MatriculaService {
  constructor(private matriculaRepository: MatriculaRepository) {}

  public async getAll() {
    return await this.matriculaRepository.getAll();
  }

  public async getById(id: number) {
    const matricula = await this.matriculaRepository.getById(id);

    if (!matricula) {
      throw new NotFoundException('Nenhuma matricula encontrado');
    }

    return matricula;
  }

  public async create(createMatriculaDto: CreateMatriculaDto) {
    const matricula = await this.matriculaRepository.create(createMatriculaDto);

    return matricula;
  }

  public async updateStatusMatricula(
    id: number,
    updateStatusMatriculaDto: UpdateStatusMatriculaDto,
  ) {
    const matriculaExists = await this.matriculaRepository.getById(id);

    if (!matriculaExists) {
      throw new NotFoundException('Nenhum curso encontrado');
    }

    matriculaExists.status = updateStatusMatriculaDto.status;

    const matricula = await this.matriculaRepository.update(matriculaExists);

    return matricula;
  }

  public async remove(id: number) {
    const matriculaExists = await this.matriculaRepository.getById(id);

    if (!matriculaExists) {
      throw new NotFoundException('Nenhuma matricula encontrado');
    }

    const matricula = await this.matriculaRepository.delete(matriculaExists);

    return matricula;
  }
}
