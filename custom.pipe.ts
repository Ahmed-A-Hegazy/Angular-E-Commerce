import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'percentage'

})
export class percentage implements PipeTransform{
    transform(value: number, value2: number):number {
        return (value * 100 / (100-value2))
      
    }
    // transform(value: any, ...args: any[]) {
    //     return (value * 100 / (100-args[0]))
    // }

  }