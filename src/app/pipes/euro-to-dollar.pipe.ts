import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroToDollar'
})
export class EuroToDollarPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return Math.floor(value/1.20);
  }

}
