import { inject, Injectable, signal } from '@angular/core';

import { Experience } from './experience.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class ExperienceService {
  private experiences = signal<Experience[]>([]);
  private translate = inject(TranslateService);

  loadedExperiences = this.experiences.asReadonly();

  loadExperiences() {
    var data = require(`./experience.data.${this.translate.currentLang}.json`);

    this.experiences.set(data)
  }
}
