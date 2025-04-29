import { z } from 'zod';

export const updateAlunoSchema = z.object({
  nome: z.string(
    z
      .string({
        invalid_type_error: 'O nome deve ser uma string',
        required_error: 'Informe o nome do aluno',
      })
      .optional(),
  ),
  email: z
    .string({
      invalid_type_error: 'O email deve ser uma string',
      required_error: 'Informe o email do aluno',
    })
    .email({
      message: 'Informe um email válido',
    })
    .optional(),
  curso: z
    .string({
      invalid_type_error: 'O curso deve ser uma string',
      required_error: 'Informe o curso do aluno',
    })
    .optional(),
  data_nascimento: z
    .string({})
    .refine((value) => {
      return new Date(value);
    })
    .optional(),
});

export type UpdateAlunoDto = z.infer<typeof updateAlunoSchema>;
