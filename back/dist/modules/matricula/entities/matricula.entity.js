"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matricula = void 0;
const aluno_entity_1 = require("../../aluno/entities/aluno.entity");
const curso_entity_1 = require("../../curso/entities/curso.entity");
const typeorm_1 = require("typeorm");
let Matricula = class Matricula {
    id;
    data_matricula;
    status;
    curso_id;
    curso;
    aluno_id;
    aluno;
};
exports.Matricula = Matricula;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Matricula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Matricula.prototype, "data_matricula", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '20' }),
    __metadata("design:type", String)
], Matricula.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matricula.prototype, "curso_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_entity_1.Curso, (curso) => curso),
    (0, typeorm_1.JoinColumn)({ name: 'curso_id' }),
    __metadata("design:type", curso_entity_1.Curso)
], Matricula.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matricula.prototype, "aluno_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => aluno_entity_1.Aluno, (aluno) => aluno),
    (0, typeorm_1.JoinColumn)({ name: 'aluno_id' }),
    __metadata("design:type", aluno_entity_1.Aluno)
], Matricula.prototype, "aluno", void 0);
exports.Matricula = Matricula = __decorate([
    (0, typeorm_1.Entity)('matriculas')
], Matricula);
//# sourceMappingURL=matricula.entity.js.map