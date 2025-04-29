import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './modules/aluno/aluno.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './modules/aluno/entities/aluno.entity';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    AlunoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Endereço do servidor DB
      port: 3306,
      username: 'root', // Usuário de dev
      password: '',
      database: 'desafio_ceap',
      entities: [Aluno],
      migrations: [__dirname + '/database/migrations/*.ts'],
      synchronize: false, // Ajuste para produção // alterado para false para não pedir migration pois dev não tem permissão
      extra: {
        connectionLimit: 10, // Limite de conexões simultâneas
        connectTimeout: 10000, // 10 segundos para o timeout de conexão
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
