import { z } from 'zod';

export const updateStatusMatriculaSchema = z.object({
  status: z
    .enum(['Ativa', 'Concluida', 'Cancelada'])
    .refine((val) => ['Ativa', 'Concluida', 'Cancelada'].includes(val), {
      message:
        'Status inválido. Os valores permitidos são: Ativa, Concluida ou Cancelada.',
    }),
});

export type UpdateStatusMatriculaDto = z.infer<
  typeof updateStatusMatriculaSchema
>;
