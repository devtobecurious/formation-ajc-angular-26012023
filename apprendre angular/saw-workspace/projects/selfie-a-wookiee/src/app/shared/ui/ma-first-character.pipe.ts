import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maFirstCharacter'
})
export class MaFirstCharacterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
