import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { CursoRepository } from './curso.repository';
import { UpdateTipoCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursoService {
  constructor(private cursoRepository: CursoRepository) {}

  public async getAll() {
    return await this.cursoRepository.getAll();
  }

  public async getById(id: number) {
    const curso = await this.cursoRepository.getById(id);

    if (!curso) {
      throw new NotFoundException('Nenhum curso encontrado');
    }

    return curso;
  }

  public async create(createCursoDto: CreateCursoDto) {
    const curso = await this.cursoRepository.create(createCursoDto);

    return curso;
  }

  public async updateTipoCurso(
    id: number,
    updateTipoCursoDto: UpdateTipoCursoDto,
  ) {
    const cursoExists = await this.cursoRepository.getById(id);

    if (!cursoExists) {
      throw new NotFoundException('Nenhum curso encontrado');
    }

    cursoExists.tipo = updateTipoCursoDto.tipo;

    const curso = await this.cursoRepository.update(cursoExists);

    return curso;
  }

  public async remove(id: number) {
    const cursoExists = await this.cursoRepository.getById(id);

    if (!cursoExists) {
      throw new NotFoundException('Nenhum curso encontrado');
    }

    const curso = await this.cursoRepository.delete(cursoExists);

    return curso;
  }
}
