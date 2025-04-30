const miliseconds = {
  year: 1000 * 60 * 60 * 24 * 30.41 * 12,
  month: 1000 * 60 * 60 * 24 * 30.41,
  day: 60 * 60 * 24 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

function TimeDiff(start: Date, end: Date) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  return endDate.getTime() - startDate.getTime();
}

function ConvertToPeriod(timestamp: number) {
  var years = Math.floor(timestamp / miliseconds.year);
  var months = Math.floor(timestamp / miliseconds.month) - (years * 12);
  var days = Math.floor(timestamp / miliseconds.day) - (years * 12 + months * 30.41);
  var hours = Math.floor(timestamp / miliseconds.hour) - (years * 12 + months * 30.41 + days * 24);
  var minutes = Math.floor(timestamp / miliseconds.minute) - (years * 12 + months * 30.41 + days * 24 + hours * 60);
  var seconds = Math.floor(timestamp / miliseconds.second) - (years * 12 + months * 30.41 + days * 24 + hours * 60 + minutes * 60);
  return {
    year: years,
    month: months,
    day: days,
    hour: hours,
    minute: minutes,
    second: seconds,
  };
}

    //TODO: Create pipe
function PeriodDisplay(period: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  }) {
    var result = '';
    if(period.year > 1)
      result = period.year + ' anos'
    else if(period.year == 1)
      result = period.year + ' ano'

    if(period.year > 0 && period.month > 0)
      result +=  ' e ';

    if(period.month > 1)
      result += period.month + ' meses'
    else if(period.month == 1)
      result += period.month + ' mês'

    return result;
  }



export { TimeDiff, ConvertToPeriod, PeriodDisplay };
