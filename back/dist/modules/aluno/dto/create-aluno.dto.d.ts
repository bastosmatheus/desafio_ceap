import { z } from 'zod';
export declare const createAlunoSchema: z.ZodObject<{
    nome: z.ZodString;
    email: z.ZodString;
    data_nascimento: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>, Date, string>>;
}, "strip", z.ZodTypeAny, {
    nome: string;
    email: string;
    data_nascimento?: Date | undefined;
}, {
    nome: string;
    email: string;
    data_nascimento?: string | undefined;
}>;
export type CreateAlunoDto = z.infer<typeof createAlunoSchema>;
