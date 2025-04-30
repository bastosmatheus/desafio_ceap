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
exports.MatriculaService = void 0;
const common_1 = require("@nestjs/common");
const matricula_repository_1 = require("./matricula.repository");
let MatriculaService = class MatriculaService {
    matriculaRepository;
    constructor(matriculaRepository) {
        this.matriculaRepository = matriculaRepository;
    }
    async getAll() {
        return await this.matriculaRepository.getAll();
    }
    async getById(id) {
        const matricula = await this.matriculaRepository.getById(id);
        if (!matricula) {
            throw new common_1.NotFoundException('Nenhuma matricula encontrado');
        }
        return matricula;
    }
    async create(createMatriculaDto) {
        const matricula = await this.matriculaRepository.create(createMatriculaDto);
        return matricula;
    }
    async updateStatusMatricula(id, updateStatusMatriculaDto) {
        const matriculaExists = await this.matriculaRepository.getById(id);
        if (!matriculaExists) {
            throw new common_1.NotFoundException('Nenhum curso encontrado');
        }
        matriculaExists.status = updateStatusMatriculaDto.status;
        const matricula = await this.matriculaRepository.update(matriculaExists);
        return matricula;
    }
    async remove(id) {
        const matriculaExists = await this.matriculaRepository.getById(id);
        if (!matriculaExists) {
            throw new common_1.NotFoundException('Nenhuma matricula encontrado');
        }
        const matricula = await this.matriculaRepository.delete(matriculaExists);
        return matricula;
    }
};
exports.MatriculaService = MatriculaService;
exports.MatriculaService = MatriculaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [matricula_repository_1.MatriculaRepository])
], MatriculaService);
//# sourceMappingURL=matricula.service.js.map