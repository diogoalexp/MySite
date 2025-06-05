import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ExperienceSummaryComponent } from "./experience-summary/experience-summary.component";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [ExperienceSummaryComponent, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  private translate = inject(TranslateService);
  private destroyRef = inject(DestroyRef);
  private experienceService = inject(ExperienceService);
  items = signal<Experience[]>([]);

  ngOnInit(): void {
    this.loadData()

    const langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadData()
    });

    this.destroyRef.onDestroy(() =>{
      langChangeSubscription.unsubscribe();
    })
  }

  private loadData(){
    this.experienceService.loadExperiences();
    this.items.set(this.experienceService.loadedExperiences());
  }
}
