import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number = 50, startIndex: number = 0): string {
    if (value.length > limit) {
      return value.substring(startIndex, startIndex + limit) + '...';
    }
    return value;
  }
}
