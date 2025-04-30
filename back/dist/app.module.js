"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const aluno_module_1 = require("./modules/aluno/aluno.module");
const typeorm_1 = require("@nestjs/typeorm");
const aluno_entity_1 = require("./modules/aluno/entities/aluno.entity");
const curso_module_1 = require("./modules/curso/curso.module");
const matricula_module_1 = require("./modules/matricula/matricula.module");
const matricula_entity_1 = require("./modules/matricula/entities/matricula.entity");
const curso_entity_1 = require("./modules/curso/entities/curso.entity");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: [aluno_entity_1.Aluno, matricula_entity_1.Matricula, curso_entity_1.Curso],
                    migrations: [__dirname + '/database/migrations/*.ts'],
                    synchronize: false,
                    extra: {
                        connectionLimit: 10,
                        connectTimeout: 10000,
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            curso_module_1.CursoModule,
            matricula_module_1.MatriculaModule,
            aluno_module_1.AlunoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map