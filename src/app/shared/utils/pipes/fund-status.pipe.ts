import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fundStatus'
})
export class FundStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 0:
        return "Not Fund";
      case 1:
        return "UNKNOWN";
      default:
        return "TYPE NOT SUPPORT"
    }

  }

}
