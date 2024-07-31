import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToSimNao'
})
export class BooleanToSimNaoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Sim' : 'Não';
  }

}
