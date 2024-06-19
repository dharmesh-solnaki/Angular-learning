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

      case 'Identify':
        return name == 'male' ? 'Mr.' : 'Ms.';
        
        case 'toCurrency':
        return  '$'.concat(name);

      default:
        return name;
    }
  }
}
