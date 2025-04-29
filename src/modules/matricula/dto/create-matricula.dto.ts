import { z } from 'zod';

export const createMatriculaSchema = z.object({
  data_matricula: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Data inválida',
    })
    .transform((val) => new Date(val))
    .refine((date) => date <= new Date(), {
      message: 'A data deve estar no passado',
    }),
  status: z
    .enum(['Ativa', 'Concluida', 'Cancelada'])
    .refine((val) => ['Ativa', 'Concluida', 'Cancelada'].includes(val), {
      message:
        'Status inválido. Os valores permitidos são: Ativa, Concluida ou Cancelada.',
    }),
  curso_id: z.number({
    invalid_type_error: 'O ID do curso deve ser um número',
    required_error: 'Informe o ID do curso',
  }),
  aluno_id: z.number({
    invalid_type_error: 'O ID do aluno deve ser um número',
    required_error: 'Informe o ID do aluno',
  }),
});

export type CreateMatriculaDto = z.infer<typeof createMatriculaSchema>;
