/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import {
  CreateMatriculaDto,
  createMatriculaSchema,
} from './dto/create-matricula.dto';
import { ZodValidationPipe } from 'src/pipe/zod-validation.pipe';
import {
  UpdateStatusMatriculaDto,
  updateStatusMatriculaSchema,
} from './dto/update-matricula.dto';

@Controller('matriculas')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  public async create(
    @Body(new ZodValidationPipe(createMatriculaSchema))
    createMatriculaDto: CreateMatriculaDto,
  ) {
    const matricula = await this.matriculaService.create(createMatriculaDto);

    return matricula;
  }

  @Get()
  public async getAll() {
    return this.matriculaService.getAll();
  }

  @Get(':id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    const matricula = await this.matriculaService.getById(id);

    return matricula;
  }

  @Patch(':id')
  public async updateStatusMatricula(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(updateStatusMatriculaSchema))
    updateStatusMatriculaDto: UpdateStatusMatriculaDto,
  ) {
    const matricula = await this.matriculaService.updateStatusMatricula(
      id,
      updateStatusMatriculaDto,
    );

    return matricula;
  }

  @Delete(':id')
  public async remove(@Param('id', ParseIntPipe) id: number) {
    const matricula = await this.matriculaService.remove(id);

    return matricula;
  }
}
