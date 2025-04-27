import { Component, inject, signal } from '@angular/core';
import { ExperienceSummaryComponent } from "./experience-summary/experience-summary.component";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  imports: [ExperienceSummaryComponent, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  private experienceService = inject(ExperienceService);
  items = signal<Experience[]>([]);

  ngOnInit(): void {
    this.experienceService.loadExperiences();

    this.items.set(this.experienceService.loadedExperiences());
  }
}
