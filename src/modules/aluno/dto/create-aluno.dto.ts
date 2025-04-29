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
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Data inválida',
    })
    .transform((val) => new Date(val))
    .refine((date) => date < new Date(), {
      message: 'A data deve estar no passado',
    })
    .optional(),
});

export type CreateAlunoDto = z.infer<typeof createAlunoSchema>;
