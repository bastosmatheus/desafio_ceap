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
import { CursoService } from './curso.service';
import { CreateCursoDto, createCursoSchema } from './dto/create-curso.dto';
import {
  UpdateTipoCursoDto,
  updateTipoCursoSchema,
} from './dto/update-curso.dto';
import { ZodValidationPipe } from 'src/pipe/zod-validation.pipe';

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  public async create(
    @Body(new ZodValidationPipe(createCursoSchema))
    createCursoDto: CreateCursoDto,
  ) {
    const curso = await this.cursoService.create(createCursoDto);

    return curso;
  }

  @Get()
  public async getAll() {
    return await this.cursoService.getAll();
  }

  @Get(':id')
  public async getById(@Param('id', ParseIntPipe) id: number) {
    const curso = await this.cursoService.getById(id);

    return curso;
  }

  @Patch(':id')
  public async updateTipoCurso(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(updateTipoCursoSchema))
    updateTipoCursoDto: UpdateTipoCursoDto,
  ) {
    const curso = await this.cursoService.updateTipoCurso(
      id,
      updateTipoCursoDto,
    );

    return curso;
  }

  @Delete(':id')
  public async remove(@Param('id', ParseIntPipe) id: number) {
    const curso = await this.cursoService.remove(id);

    return curso;
  }
}
