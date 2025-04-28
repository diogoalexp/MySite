import { Component, input } from '@angular/core';
import { Project } from '../../experience.model';

@Component({
  selector: 'app-experience-project',
  imports: [],
  templateUrl: './experience-project.component.html',
  styleUrl: './experience-project.component.css'
})
export class ExperienceProjectComponent {
  project = input.required<Project>();

    //TODO: Create pipe
    displayTime(){
      var diff = this.getDataDiff(new Date(this.project().start), new Date(this.project().end));
      console.log(diff);
      return diff.year + ' anos e ' + diff.month + ' meses'
    }

    getDataDiff(startDate: Date, endDate: Date) {
      var diff = endDate.getTime() - startDate.getTime();
      var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44 * 12))
      var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)) - (years * 12)
      var days = Math.floor(diff / (60 * 60 * 24 * 1000)) - (months * 30.44);
      var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
      var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
      var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
      return { year: years, month: months, day: days, hour: hours, minute: minutes, second: seconds };
    }
}
