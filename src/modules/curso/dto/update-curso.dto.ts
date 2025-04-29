import { z } from 'zod';

export const updateTipoCursoSchema = z.object({
  tipo: z
    .enum(['Livre', 'Técnico'])
    .refine((val) => ['Livre', 'Técnico'].includes(val), {
      message: 'Tipo inválido. Os valores permitidos são: Livre ou Técnico.',
    }),
});

export type UpdateTipoCursoDto = z.infer<typeof updateTipoCursoSchema>;
