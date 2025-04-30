import { z } from 'zod';
export declare const updateAlunoSchema: z.ZodObject<{
    nome: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    curso: z.ZodOptional<z.ZodString>;
    data_nascimento: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>, Date, string>>;
}, "strip", z.ZodTypeAny, {
    nome?: string | undefined;
    email?: string | undefined;
    data_nascimento?: Date | undefined;
    curso?: string | undefined;
}, {
    nome?: string | undefined;
    email?: string | undefined;
    data_nascimento?: string | undefined;
    curso?: string | undefined;
}>;
export type UpdateAlunoDto = z.infer<typeof updateAlunoSchema>;
