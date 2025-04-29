import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { CursoRepository } from './curso.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [CursoController],
  providers: [CursoService, CursoRepository],
})
export class CursoModule {}
