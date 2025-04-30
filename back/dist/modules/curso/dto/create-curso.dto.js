"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCursoSchema = void 0;
const zod_1 = require("zod");
exports.createCursoSchema = zod_1.z.object({
    nome: zod_1.z.string({
        invalid_type_error: 'O nome do curso deve ser uma string',
        required_error: 'Informe o nome do curso',
    }),
    tipo: zod_1.z
        .enum(['Livre', 'Técnico'])
        .refine((val) => ['Livre', 'Técnico'].includes(val), {
        message: 'Tipo inválido. Os valores permitidos são: Livre ou Técnico.',
    }),
});
//# sourceMappingURL=create-curso.dto.js.map