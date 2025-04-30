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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculaRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const matricula_entity_1 = require("./entities/matricula.entity");
const typeorm_2 = require("typeorm");
let MatriculaRepository = class MatriculaRepository {
    matriculaRepository;
    constructor(matriculaRepository) {
        this.matriculaRepository = matriculaRepository;
    }
    async getAll() {
        const matriculas = await this.matriculaRepository.find();
        return matriculas;
    }
    async getById(id) {
        const matriculas = await this.matriculaRepository.findOneBy({
            id,
        });
        return matriculas;
    }
    async create(createMatriculaDto) {
        const matriculaCreated = this.matriculaRepository.create(createMatriculaDto);
        const matriculaSaved = await this.matriculaRepository.save(matriculaCreated);
        return matriculaSaved;
    }
    async update(matricula) {
        const matriculaUpdated = await this.matriculaRepository.save(matricula);
        return matriculaUpdated;
    }
    async delete(matricula) {
        const matriculaDeleted = await this.matriculaRepository.remove(matricula);
        return matriculaDeleted;
    }
};
exports.MatriculaRepository = MatriculaRepository;
exports.MatriculaRepository = MatriculaRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(matricula_entity_1.Matricula)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MatriculaRepository);
//# sourceMappingURL=matricula.repository.js.map