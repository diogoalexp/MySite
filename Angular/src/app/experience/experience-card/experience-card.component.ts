import { Component, input, OnInit } from '@angular/core';
import { Experience, Project } from '../experience.model';
import { ExperienceProjectComponent } from './experience-project/experience-project.component';
import { DatePipe } from '@angular/common';
import { ConvertToPeriod, PeriodDisplay, TimeDiff } from '../../shared/date.util';

@Component({
  selector: 'app-experience-card',
  imports: [ExperienceProjectComponent, DatePipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css',
})
export class ExperienceCardComponent implements OnInit {
  experience = input.required<Experience>();
  firstDate: Date | null = null;
  lastDate: Date | null = null;
  displayTime: string = '';

  ngOnInit(): void {
    this.displayTime = this.calculateExperienceTime();
  }

  //TODO: Create pipe
  calculateExperienceTime() {
    this.experience().projects.forEach((project) => {
      const end = new Date(project.end).getTime() == new Date("1111-01-01").getTime() ? new Date() : project.end

      if (!this.firstDate || this.firstDate.getTime() > new Date(project.start).getTime())
        this.firstDate = new Date(project.start);


      if (!this.lastDate || this.lastDate.getTime() < new Date(end).getTime())
        this.lastDate = new Date(end);
    });

    var diff = TimeDiff(this.firstDate!, this.lastDate!);
    var period = ConvertToPeriod(diff);
    return PeriodDisplay(period);
  }
}
