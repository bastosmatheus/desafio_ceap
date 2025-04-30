import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunoRepository } from './aluno.repository';

@Injectable()
export class AlunoService {
  constructor(private alunoRepository: AlunoRepository) {}

  public async getAll() {
    return await this.alunoRepository.getAll();
  }

  public async getById(id: number) {
    const aluno = await this.alunoRepository.getById(id);

    if (!aluno) {
      throw new NotFoundException('Nenhum aluno encontrado');
    }

    return aluno;
  }

  public async create(createAlunoDto: CreateAlunoDto) {
    const aluno = await this.alunoRepository.create(createAlunoDto);

    return aluno;
  }

  public async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    const alunoExists = await this.alunoRepository.getById(id);

    if (!alunoExists) {
      throw new NotFoundException('Nenhum aluno encontrado');
    }

    alunoExists.nome = updateAlunoDto.nome
      ? updateAlunoDto.nome
      : alunoExists.nome;
    alunoExists.email = updateAlunoDto.email
      ? updateAlunoDto.email
      : alunoExists.email;
    alunoExists.data_nascimento = updateAlunoDto.data_nascimento
      ? new Date(updateAlunoDto.data_nascimento)
      : alunoExists.data_nascimento;

    const aluno = await this.alunoRepository.update(alunoExists);

    return aluno;
  }

  public async remove(id: number) {
    const alunoExists = await this.alunoRepository.getById(id);

    if (!alunoExists) {
      throw new NotFoundException('Nenhum aluno encontrado');
    }

    const alunoDeleted = await this.alunoRepository.delete(alunoExists);

    return alunoDeleted;
  }
}
