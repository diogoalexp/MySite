import { Component, input } from '@angular/core';
import { Project } from '../../experience.model';
import { TimeDiff, ConvertToPeriod, PeriodDisplay } from '../../../shared/date.util';
import { PeriodPipe } from "../../period.pipe";

@Component({
  selector: 'app-experience-project',
  imports: [PeriodPipe],
  templateUrl: './experience-project.component.html',
  styleUrl: './experience-project.component.css'
})
export class ExperienceProjectComponent {
  project = input.required<Project>();


    displayTime(){
      const currentWork = this.project().end == null;
      const end = currentWork ? new Date() : this.project().end

      var diff = TimeDiff(this.project().start, end);
      return ConvertToPeriod(diff);
    }


}
