import { z } from 'zod';

export const createCursoSchema = z.object({
  nome: z.string({
    invalid_type_error: 'O nome do curso deve ser uma string',
    required_error: 'Informe o nome do curso',
  }),
  tipo: z
    .enum(['Livre', 'Técnico'])
    .refine((val) => ['Livre', 'Técnico'].includes(val), {
      message: 'Tipo inválido. Os valores permitidos são: Livre ou Técnico.',
    }),
});

export type CreateCursoDto = z.infer<typeof createCursoSchema>;
