import { PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';
declare class ZodValidationPipe implements PipeTransform {
    private schema;
    constructor(schema: ZodSchema);
    transform(value: unknown): ZodSchema<any, import("zod").ZodTypeDef, any>;
}
export { ZodValidationPipe };
