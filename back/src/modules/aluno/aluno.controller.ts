/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto, createAlunoSchema } from './dto/create-aluno.dto';
import { UpdateAlunoDto, updateAlunoSchema } from './dto/update-aluno.dto';
import { ZodValidationPipe } from 'src/pipe/zod-validation.pipe';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  public async create(
    @Body(new ZodValidationPipe(createAlunoSchema))
    createAlunoDto: CreateAlunoDto,
  ) {
    const aluno = await this.alunoService.create(createAlunoDto);

    return aluno;
  }

  @Get()
  public async getAll() {
    return this.alunoService.getAll();
  }

  @Get(':id')
  public async getById(@Param('id', ParseIntPipe) id: number) {
    const aluno = await this.alunoService.getById(id);

    return aluno;
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(updateAlunoSchema))
    updateAlunoDto: UpdateAlunoDto,
  ) {
    const aluno = await this.alunoService.update(id, updateAlunoDto);

    return aluno;
  }

  @Delete(':id')
  public async remove(@Param('id', ParseIntPipe) id: number) {
    const aluno = await this.alunoService.remove(id);

    return aluno;
  }
}
