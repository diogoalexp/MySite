import { Component, input } from '@angular/core';
import { Project } from '../../experience.model';
import { TimeDiff, ConvertToPeriod, PeriodDisplay } from '../../../shared/date.util';

@Component({
  selector: 'app-experience-project',
  imports: [],
  templateUrl: './experience-project.component.html',
  styleUrl: './experience-project.component.css'
})
export class ExperienceProjectComponent {
  project = input.required<Project>();


    displayTime(){
      const end = new Date(this.project().end).getTime() == new Date("1111-01-01").getTime() ? new Date() : this.project().end

      var diff = TimeDiff(this.project().start, end);
      var period = ConvertToPeriod(diff);

      var result = PeriodDisplay(period);

      return result;
    }


}
