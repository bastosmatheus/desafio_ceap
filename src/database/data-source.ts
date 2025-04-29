import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Aluno } from 'src/modules/aluno/entities/aluno.entity';

config();

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST, // Endereço do servidor DB
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME, // Usuário de dev
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Aluno],
  migrations: ['src/database/migrations/**.ts'],
  synchronize: false,
});

export default dataSource;
