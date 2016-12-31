import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translation' })
export class TranslationPipe implements PipeTransform {
    transform(value: string): string {
        return value;
    }
}


