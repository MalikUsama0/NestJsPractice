import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
export declare class ParseDatePipe implements PipeTransform {
    transform(value: string | number, metadata: ArgumentMetadata): string | number | Date | (() => string);
    private convertTimestamp;
}
