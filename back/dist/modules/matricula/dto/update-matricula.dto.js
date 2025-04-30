"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatusMatriculaSchema = void 0;
const zod_1 = require("zod");
exports.updateStatusMatriculaSchema = zod_1.z.object({
    status: zod_1.z
        .enum(['Ativa', 'Concluida', 'Cancelada'])
        .refine((val) => ['Ativa', 'Concluida', 'Cancelada'].includes(val), {
        message: 'Status inválido. Os valores permitidos são: Ativa, Concluida ou Cancelada.',
    }),
});
//# sourceMappingURL=update-matricula.dto.js.map