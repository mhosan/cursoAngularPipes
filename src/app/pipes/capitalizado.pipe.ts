import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let nombre = value.toLowerCase().split(' ');
    for (let i in nombre) {
      nombre[i] = nombre[i][0].toUpperCase() + nombre[i].substr(1);
    }
    return nombre.join(' ');
  }

}
