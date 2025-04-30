import { z } from 'zod';
export declare const updateTipoCursoSchema: z.ZodObject<{
    tipo: z.ZodEffects<z.ZodEnum<["Livre", "Técnico"]>, "Livre" | "Técnico", "Livre" | "Técnico">;
}, "strip", z.ZodTypeAny, {
    tipo: "Livre" | "Técnico";
}, {
    tipo: "Livre" | "Técnico";
}>;
export type UpdateTipoCursoDto = z.infer<typeof updateTipoCursoSchema>;
