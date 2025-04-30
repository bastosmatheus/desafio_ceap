"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAlunoSchema = void 0;
const zod_1 = require("zod");
exports.createAlunoSchema = zod_1.z.object({
    nome: zod_1.z.string({
        invalid_type_error: 'O nome deve ser uma string',
        required_error: 'Informe o nome do aluno',
    }),
    email: zod_1.z
        .string({
        invalid_type_error: 'O email deve ser uma string',
        required_error: 'Informe o email do aluno',
    })
        .email({
        message: 'Informe um email válido',
    }),
    data_nascimento: zod_1.z
        .string({
        invalid_type_error: 'A data de nascimento deve ser uma string (DIA-MÊS-ANO)',
        required_error: 'Informe a data de nascimento do aluno',
    })
        .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Data inválida',
    })
        .transform((val) => new Date(val))
        .refine((date) => date < new Date(), {
        message: 'A data deve estar no passado',
    })
        .optional(),
});
//# sourceMappingURL=create-aluno.dto.js.map