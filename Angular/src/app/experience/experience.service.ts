import { inject, Injectable, signal } from '@angular/core';

import { Experience } from './experience.model';

@Injectable({providedIn: 'root'})
export class ExperienceService {
  private experiences = signal<Experience[]>([]);

  loadedExperiences = this.experiences.asReadonly();

  loadExperiences() {
    var data = require('./experience.data.json');

    this.experiences.set(data)
  }
}
