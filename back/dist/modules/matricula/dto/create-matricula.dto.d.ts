import { z } from 'zod';
export declare const createMatriculaSchema: z.ZodObject<{
    data_matricula: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>, Date, string>;
    status: z.ZodEffects<z.ZodEnum<["Ativa", "Concluida", "Cancelada"]>, "Ativa" | "Concluida" | "Cancelada", "Ativa" | "Concluida" | "Cancelada">;
    curso_id: z.ZodNumber;
    aluno_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "Ativa" | "Concluida" | "Cancelada";
    data_matricula: Date;
    curso_id: number;
    aluno_id: number;
}, {
    status: "Ativa" | "Concluida" | "Cancelada";
    data_matricula: string;
    curso_id: number;
    aluno_id: number;
}>;
export type CreateMatriculaDto = z.infer<typeof createMatriculaSchema>;
