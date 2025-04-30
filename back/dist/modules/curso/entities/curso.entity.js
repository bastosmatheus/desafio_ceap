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
exports.Curso = void 0;
const matricula_entity_1 = require("../../matricula/entities/matricula.entity");
const typeorm_1 = require("typeorm");
let Curso = class Curso {
    id;
    nome;
    tipo;
    matriculas;
};
exports.Curso = Curso;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Curso.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '100' }),
    __metadata("design:type", String)
], Curso.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '50' }),
    __metadata("design:type", String)
], Curso.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matricula_entity_1.Matricula, (matricula) => matricula.curso_id),
    __metadata("design:type", Array)
], Curso.prototype, "matriculas", void 0);
exports.Curso = Curso = __decorate([
    (0, typeorm_1.Entity)('cursos')
], Curso);
//# sourceMappingURL=curso.entity.js.map