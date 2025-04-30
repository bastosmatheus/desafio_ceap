import { z } from 'zod';
export declare const updateStatusMatriculaSchema: z.ZodObject<{
    status: z.ZodEffects<z.ZodEnum<["Ativa", "Concluida", "Cancelada"]>, "Ativa" | "Concluida" | "Cancelada", "Ativa" | "Concluida" | "Cancelada">;
}, "strip", z.ZodTypeAny, {
    status: "Ativa" | "Concluida" | "Cancelada";
}, {
    status: "Ativa" | "Concluida" | "Cancelada";
}>;
export type UpdateStatusMatriculaDto = z.infer<typeof updateStatusMatriculaSchema>;
