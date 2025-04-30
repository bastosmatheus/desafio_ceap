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
exports.MatriculaController = void 0;
const common_1 = require("@nestjs/common");
const matricula_service_1 = require("./matricula.service");
const create_matricula_dto_1 = require("./dto/create-matricula.dto");
const zod_validation_pipe_1 = require("../../pipe/zod-validation.pipe");
const update_matricula_dto_1 = require("./dto/update-matricula.dto");
let MatriculaController = class MatriculaController {
    matriculaService;
    constructor(matriculaService) {
        this.matriculaService = matriculaService;
    }
    async create(createMatriculaDto) {
        const matricula = await this.matriculaService.create(createMatriculaDto);
        return matricula;
    }
    async getAll() {
        return this.matriculaService.getAll();
    }
    async findOne(id) {
        const matricula = await this.matriculaService.getById(id);
        return matricula;
    }
    async updateStatusMatricula(id, updateStatusMatriculaDto) {
        const matricula = await this.matriculaService.updateStatusMatricula(id, updateStatusMatriculaDto);
        return matricula;
    }
    async remove(id) {
        const matricula = await this.matriculaService.remove(id);
        return matricula;
    }
};
exports.MatriculaController = MatriculaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(create_matricula_dto_1.createMatriculaSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(update_matricula_dto_1.updateStatusMatriculaSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "updateStatusMatricula", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "remove", null);
exports.MatriculaController = MatriculaController = __decorate([
    (0, common_1.Controller)('matriculas'),
    __metadata("design:paramtypes", [matricula_service_1.MatriculaService])
], MatriculaController);
//# sourceMappingURL=matricula.controller.js.map