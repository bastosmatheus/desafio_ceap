import { z } from 'zod';

export const createAlunoSchema = z.object({
  nome: z.string(
    z.string({
      invalid_type_error: 'O nome deve ser uma string',
      required_error: 'Informe o nome do aluno',
    }),
  ),
  email: z
    .string({
      invalid_type_error: 'O email deve ser uma string',
      required_error: 'Informe o email do aluno',
    })
    .email({
      message: 'Informe um email válido',
    }),
  curso: z.string({
    invalid_type_error: 'O curso deve ser uma string',
    required_error: 'Informe o curso do aluno',
  }),
  data_nascimento: z
    .string({})
    .refine((value) => {
      return new Date(value);
    })
    .optional(),
});

export type CreateAlunoDto = z.infer<typeof createAlunoSchema>;
