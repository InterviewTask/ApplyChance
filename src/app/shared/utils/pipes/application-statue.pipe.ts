import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationStatue'
})
export  class ApplicationStatuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
      return "ACCEPTED";
      case 2:
        return "REJECTED";
      case 3:
        return "UNDER REVIEW";
      default:
        return "TYPE NOT SUPPORT"
    }
  }

}
