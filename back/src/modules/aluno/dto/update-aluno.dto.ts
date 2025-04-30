import { z } from 'zod';

export const updateAlunoSchema = z.object({
  nome: z
    .string({
      invalid_type_error: 'O nome deve ser uma string',
      required_error: 'Informe o nome do aluno',
    })
    .optional(),
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
    .string({
      invalid_type_error:
        'A data de nascimento deve ser uma string (DIA-MÊS-ANO)',
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

export type UpdateAlunoDto = z.infer<typeof updateAlunoSchema>;
