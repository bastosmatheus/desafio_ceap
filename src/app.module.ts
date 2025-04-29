import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './modules/aluno/aluno.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './modules/aluno/entities/aluno.entity';
import { CursoModule } from './modules/curso/curso.module';
import { MatriculaModule } from './modules/matricula/matricula.module';
import { Matricula } from './modules/matricula/entities/matricula.entity';
import { Curso } from './modules/curso/entities/curso.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Aluno, Matricula, Curso],
        migrations: [__dirname + '/database/migrations/*.ts'],
        synchronize: false, // Ajuste para produção // alterado para false para não pedir migration pois dev não tem permissão
        extra: {
          connectionLimit: 10, // Limite de conexões simultâneas
          connectTimeout: 10000, // 10 segundos para o timeout de conexão
        },
      }),
      inject: [ConfigService],
    }),
    CursoModule,
    MatriculaModule,
    AlunoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
