"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMatriculaSchema = void 0;
const zod_1 = require("zod");
exports.createMatriculaSchema = zod_1.z.object({
    data_matricula: zod_1.z
        .string({
        invalid_type_error: 'A data de matricula deve ser uma string (DIA-MÊS-ANO)',
        required_error: 'Informe uma data de matricula',
    })
        .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Data inválida',
    })
        .transform((val) => new Date(val))
        .refine((date) => date <= new Date(), {
        message: 'A data deve estar no passado',
    }),
    status: zod_1.z
        .enum(['Ativa', 'Concluida', 'Cancelada'])
        .refine((val) => ['Ativa', 'Concluida', 'Cancelada'].includes(val), {
        message: 'Status inválido. Os valores permitidos são: Ativa, Concluida ou Cancelada.',
    }),
    curso_id: zod_1.z.number({
        invalid_type_error: 'O ID do curso deve ser um número',
        required_error: 'Informe o ID do curso',
    }),
    aluno_id: zod_1.z.number({
        invalid_type_error: 'O ID do aluno deve ser um número',
        required_error: 'Informe o ID do aluno',
    }),
});
//# sourceMappingURL=create-matricula.dto.js.map