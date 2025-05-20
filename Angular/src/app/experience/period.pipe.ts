import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'period',
  standalone: true
})
export class PeriodPipe implements PipeTransform {

  transform(value: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  }) {
    var result = '';
    if(value.year > 1)
      result = value.year + ' anos'
    else if(value.year == 1)
      result = value.year + ' ano'

    if(value.year > 0 && value.month > 0)
      result +=  ' e ';

    if(value.month > 1)
      result += value.month + ' meses'
    else if(value.month == 1)
      result += value.month + ' mês'

    return result;
  }

}
