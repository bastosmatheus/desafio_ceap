import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Aluno } from 'src/modules/aluno/entities/aluno.entity';
import { Matricula } from 'src/modules/matricula/entities/matricula.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [Aluno, Matricula, Curso],
  migrations: ['src/database/migrations/**.ts'],
  synchronize: false,
});

export default dataSource;
