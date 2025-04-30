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
exports.AlunoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aluno_entity_1 = require("./entities/aluno.entity");
const typeorm_2 = require("typeorm");
let AlunoRepository = class AlunoRepository {
    alunoRepository;
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async getAll() {
        const alunos = await this.alunoRepository.find();
        return alunos;
    }
    async getById(id) {
        const alunos = await this.alunoRepository.findOneBy({
            id,
        });
        return alunos;
    }
    async create(createAlunoDto) {
        const alunoCreated = this.alunoRepository.create(createAlunoDto);
        const alunoSaved = await this.alunoRepository.save(alunoCreated);
        return alunoSaved;
    }
    async update(aluno) {
        const alunoUpdated = await this.alunoRepository.save(aluno);
        return alunoUpdated;
    }
    async delete(aluno) {
        const alunoDeleted = await this.alunoRepository.remove(aluno);
        return alunoDeleted;
    }
};
exports.AlunoRepository = AlunoRepository;
exports.AlunoRepository = AlunoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aluno_entity_1.Aluno)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlunoRepository);
//# sourceMappingURL=aluno.repository.js.map