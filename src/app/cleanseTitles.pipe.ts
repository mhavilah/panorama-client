import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cleanseTitles'
})
export class CleanseTitlesPipe implements PipeTransform {
    transform(value: string, args: any[] = []): string {
        if (!value) { return ''; }
        return value.replace(/^Mrs\. (.*)$/gm, "$1");
    }

}