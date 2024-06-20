import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  transform(name: string, action: string): string {
    switch (action) {
      case 'Upper':
        return name.toUpperCase();

      case 'Lower':
        return name.toLowerCase();

      case 'prefix':
        return name == 'male' ? 'Mr.'.concat(name) : 'Ms.'.concat(name);
        
        case 'toCurrency':
        return  '$'.concat(name);

      default:
        return name;
    }
  }
}
