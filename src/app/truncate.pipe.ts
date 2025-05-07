import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(
    value: string | null | undefined,
    maxLen: number = 200,
    clamp: string = '…'
  ): string {
    if (!value) return '';
    const str = value.toString();
    if (str.length <= maxLen) return str;
    const truncated = str.slice(0, maxLen);
    const lastSpace = truncated.lastIndexOf(' ');
    return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + clamp;
  }

}
