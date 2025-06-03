import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { Formation } from './formation.model';
import { FormationCardComponent } from "./formation-card/formation-card.component";
import { FormationArticleComponent } from "./formation-article/formation-article.component";
import { FormationsService } from './formation.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formation',
  imports: [FormationCardComponent, FormationArticleComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css',
})
export class FormationComponent implements OnInit {
  private formationsService = inject(FormationsService);
  items = signal<Formation[]>([]);
  selectedItem?: Formation = this.items()[0];
  private translate = inject(TranslateService);
  private destroyRef = inject(DestroyRef);


  ngOnInit(): void {
    this.loadData()

    const langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadData()
    });

    this.destroyRef.onDestroy(() =>{
      langChangeSubscription.unsubscribe();
    })
  }

  onSelectFormation(formation : Formation){
    this.selectedItem = formation;
  }

  isSelectedItem = (formation : Formation) =>{
    return this.selectedItem?.title == formation.title
  }

  private loadData(){
      this.formationsService.loadFormations();
      this.items.set(this.formationsService.loadedFormations());
      this.selectedItem = this.items()[0];
  }

}
