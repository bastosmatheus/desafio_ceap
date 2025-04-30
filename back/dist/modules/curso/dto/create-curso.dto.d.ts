import { z } from 'zod';
export declare const createCursoSchema: z.ZodObject<{
    nome: z.ZodString;
    tipo: z.ZodEffects<z.ZodEnum<["Livre", "Técnico"]>, "Livre" | "Técnico", "Livre" | "Técnico">;
}, "strip", z.ZodTypeAny, {
    nome: string;
    tipo: "Livre" | "Técnico";
}, {
    nome: string;
    tipo: "Livre" | "Técnico";
}>;
export type CreateCursoDto = z.infer<typeof createCursoSchema>;
