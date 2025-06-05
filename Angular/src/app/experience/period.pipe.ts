import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  }, format: string) {

    if(format == 'year'){
      if(value.year > 1)
        return 'general.years'
      else if(value.year == 1)
        return 'general.year'
    }else{
      if(value.month > 1)
        return 'general.months'
      else if(value.month == 1)
        return 'general.month'
    }

    return '';
  }

}
