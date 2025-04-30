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
exports.CursoService = void 0;
const common_1 = require("@nestjs/common");
const curso_repository_1 = require("./curso.repository");
let CursoService = class CursoService {
    cursoRepository;
    constructor(cursoRepository) {
        this.cursoRepository = cursoRepository;
    }
    async getAll() {
        return await this.cursoRepository.getAll();
    }
    async getById(id) {
        const curso = await this.cursoRepository.getById(id);
        if (!curso) {
            throw new common_1.NotFoundException('Nenhum curso encontrado');
        }
        return curso;
    }
    async create(createCursoDto) {
        const curso = await this.cursoRepository.create(createCursoDto);
        return curso;
    }
    async updateTipoCurso(id, updateTipoCursoDto) {
        const cursoExists = await this.cursoRepository.getById(id);
        if (!cursoExists) {
            throw new common_1.NotFoundException('Nenhum curso encontrado');
        }
        cursoExists.tipo = updateTipoCursoDto.tipo;
        const curso = await this.cursoRepository.update(cursoExists);
        return curso;
    }
    async remove(id) {
        const cursoExists = await this.cursoRepository.getById(id);
        if (!cursoExists) {
            throw new common_1.NotFoundException('Nenhum curso encontrado');
        }
        const curso = await this.cursoRepository.delete(cursoExists);
        return curso;
    }
};
exports.CursoService = CursoService;
exports.CursoService = CursoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [curso_repository_1.CursoRepository])
], CursoService);
//# sourceMappingURL=curso.service.js.map