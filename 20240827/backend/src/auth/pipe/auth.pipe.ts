import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { z } from 'zod';

export class AuthPipe implements PipeTransform {
    constructor(private schema: z.Schema) {
        this.schema = schema
    }
    transform(value: any, metadata: ArgumentMetadata) {
        try {
            console.log(value)
            const result = this.schema.safeParse(value);

            console.log(result)
            if (result.success)
                return value;

        } catch (e) {
            console.error("data type Error", e);
            throw e
        }
    }
}