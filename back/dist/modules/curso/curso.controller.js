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
exports.CursoController = void 0;
const common_1 = require("@nestjs/common");
const curso_service_1 = require("./curso.service");
const create_curso_dto_1 = require("./dto/create-curso.dto");
const update_curso_dto_1 = require("./dto/update-curso.dto");
const zod_validation_pipe_1 = require("../../pipe/zod-validation.pipe");
let CursoController = class CursoController {
    cursoService;
    constructor(cursoService) {
        this.cursoService = cursoService;
    }
    async create(createCursoDto) {
        const curso = await this.cursoService.create(createCursoDto);
        return curso;
    }
    async getAll() {
        return await this.cursoService.getAll();
    }
    async getById(id) {
        const curso = await this.cursoService.getById(id);
        return curso;
    }
    async updateTipoCurso(id, updateTipoCursoDto) {
        const curso = await this.cursoService.updateTipoCurso(id, updateTipoCursoDto);
        return curso;
    }
    async remove(id) {
        const curso = await this.cursoService.remove(id);
        return curso;
    }
};
exports.CursoController = CursoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(create_curso_dto_1.createCursoSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(update_curso_dto_1.updateTipoCursoSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "updateTipoCurso", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "remove", null);
exports.CursoController = CursoController = __decorate([
    (0, common_1.Controller)('cursos'),
    __metadata("design:paramtypes", [curso_service_1.CursoService])
], CursoController);
//# sourceMappingURL=curso.controller.js.map