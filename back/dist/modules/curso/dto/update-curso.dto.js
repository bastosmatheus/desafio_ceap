"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTipoCursoSchema = void 0;
const zod_1 = require("zod");
exports.updateTipoCursoSchema = zod_1.z.object({
    tipo: zod_1.z
        .enum(['Livre', 'Técnico'])
        .refine((val) => ['Livre', 'Técnico'].includes(val), {
        message: 'Tipo inválido. Os valores permitidos são: Livre ou Técnico.',
    }),
});
//# sourceMappingURL=update-curso.dto.js.map