import { inject, Injectable, signal } from '@angular/core';

import { Formation } from './formation.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class FormationsService {
  private formations = signal<Formation[]>([]);

  loadedFormations = this.formations.asReadonly();
  private translate = inject(TranslateService);

  loadFormations() {
    var data = require(`./formation.data.${this.translate.currentLang}.json`);

    this.formations.set(data)
  }
}
