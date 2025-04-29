import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Injectable()
export class AlunoRepository {
  constructor(
    @InjectRepository(Aluno) private alunoRepository: Repository<Aluno>,
  ) {}

  public async getAll() {
    const alunos = await this.alunoRepository.find();

    return alunos;
  }

  public async getById(id: number) {
    const alunos = await this.alunoRepository.findOneBy({
      id,
    });

    return alunos;
  }

  public async create(createAlunoDto: CreateAlunoDto) {
    const alunoCreated = this.alunoRepository.create(createAlunoDto);

    const alunoSaved = await this.alunoRepository.save(alunoCreated);

    return alunoSaved;
  }

  public async update(aluno: Aluno) {
    const alunoUpdated = await this.alunoRepository.save(aluno);

    return alunoUpdated;
  }

  public async delete(aluno: Aluno) {
    const alunoDeleted = await this.alunoRepository.delete(aluno);

    return alunoDeleted;
  }
}
