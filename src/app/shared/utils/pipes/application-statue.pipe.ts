import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationStatue'
})
export  class ApplicationStatuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 0:
        return "UNKNOWN";
        case 1:
        return "ACCEPTED";
      default:
        return "TYPE NOT SUPPORT"
    }
  }

}
