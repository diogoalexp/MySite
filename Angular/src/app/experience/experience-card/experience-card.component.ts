import { Component, input, OnInit } from '@angular/core';
import { Experience, Project } from '../experience.model';
import { ExperienceProjectComponent } from './experience-project/experience-project.component';
import { DatePipe } from '@angular/common';
import { ConvertToPeriod, PeriodDisplay, TimeDiff } from '../../shared/date.util';
import { PeriodPipe } from '../period.pipe';

@Component({
  selector: 'app-experience-card',
  imports: [ExperienceProjectComponent, DatePipe, PeriodPipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css',
})
export class ExperienceCardComponent implements OnInit {
  experience = input.required<Experience>();
  firstDate: Date | null = null;
  lastDate: Date | null = null;
  currentWork: Boolean = false;
  displayTime?: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  };

  ngOnInit(): void {
    this.displayTime = this.calculateExperienceTime();
  }

  calculateExperienceTime() {
    this.experience().projects.forEach((project) => {
      console.log('project.end', project.end)
      this.currentWork = project.end == null;
      const end = this.currentWork ? new Date() : project.end

      if (!this.firstDate || this.firstDate.getTime() > new Date(project.start).getTime())
        this.firstDate = new Date(project.start);


      if (!this.lastDate || this.lastDate.getTime() < new Date(end).getTime())
        this.lastDate = new Date(end);
    });

    var diff = TimeDiff(this.firstDate!, this.lastDate!);
    return ConvertToPeriod(diff);
  }
}
