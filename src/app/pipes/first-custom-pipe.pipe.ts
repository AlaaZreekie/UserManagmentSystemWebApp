import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCustomPipe'
})
export class FirstCustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
