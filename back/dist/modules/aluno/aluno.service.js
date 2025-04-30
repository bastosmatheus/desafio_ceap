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
exports.AlunoService = void 0;
const common_1 = require("@nestjs/common");
const aluno_repository_1 = require("./aluno.repository");
let AlunoService = class AlunoService {
    alunoRepository;
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async getAll() {
        return await this.alunoRepository.getAll();
    }
    async getById(id) {
        const aluno = await this.alunoRepository.getById(id);
        if (!aluno) {
            throw new common_1.NotFoundException('Nenhum aluno encontrado');
        }
        return aluno;
    }
    async create(createAlunoDto) {
        const aluno = await this.alunoRepository.create(createAlunoDto);
        return aluno;
    }
    async update(id, updateAlunoDto) {
        const alunoExists = await this.alunoRepository.getById(id);
        if (!alunoExists) {
            throw new common_1.NotFoundException('Nenhum aluno encontrado');
        }
        alunoExists.nome = updateAlunoDto.nome
            ? updateAlunoDto.nome
            : alunoExists.nome;
        alunoExists.email = updateAlunoDto.email
            ? updateAlunoDto.email
            : alunoExists.email;
        alunoExists.data_nascimento = updateAlunoDto.data_nascimento
            ? new Date(updateAlunoDto.data_nascimento)
            : alunoExists.data_nascimento;
        const aluno = await this.alunoRepository.update(alunoExists);
        return aluno;
    }
    async remove(id) {
        const alunoExists = await this.alunoRepository.getById(id);
        if (!alunoExists) {
            throw new common_1.NotFoundException('Nenhum aluno encontrado');
        }
        const alunoDeleted = await this.alunoRepository.delete(alunoExists);
        return alunoDeleted;
    }
};
exports.AlunoService = AlunoService;
exports.AlunoService = AlunoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aluno_repository_1.AlunoRepository])
], AlunoService);
//# sourceMappingURL=aluno.service.js.map