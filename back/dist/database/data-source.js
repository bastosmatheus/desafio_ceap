"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const aluno_entity_1 = require("../modules/aluno/entities/aluno.entity");
const matricula_entity_1 = require("../modules/matricula/entities/matricula.entity");
const curso_entity_1 = require("../modules/curso/entities/curso.entity");
const config_1 = require("@nestjs/config");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
const dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [aluno_entity_1.Aluno, matricula_entity_1.Matricula, curso_entity_1.Curso],
    migrations: ['src/database/migrations/**.ts'],
    synchronize: false,
});
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map