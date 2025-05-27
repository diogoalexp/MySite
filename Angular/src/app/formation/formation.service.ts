import { inject, Injectable, signal } from '@angular/core';

import { Formation } from './formation.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
// import { ErrorService } from '../shared/error.service';

@Injectable({providedIn: 'root'})
export class FormationsService {
//   private errorService = inject(ErrorService);
//   private httpClient = inject(HttpClient);
  private formations = signal<Formation[]>([]);

  loadedFormations = this.formations.asReadonly();
  private translate = inject(TranslateService);

  loadFormations() {
    var data = require(`./formation.data.${this.translate.currentLang}.json`);

    this.formations.set(data)
    // return this.fetchPlaces(
    //   "http://localhost:3000/places",
    //   "Fail to fetch available places"
    //   )
  }

//   private fetchPlaces(url: string, errorMessage: string){
//     return this.httpClient.get<{places: Formation[]}>(url, {
//       observe: 'response'
//     })
//     .pipe(
//       map((response) => response.body),
//       catchError((error) => {
//         console.log(error);
//         return throwError(() => new Error(errorMessage));
//       })
//     )
//   }
}
