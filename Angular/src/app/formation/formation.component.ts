import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Formation } from './formation.model';
import { FormationCardComponent } from "./formation-card/formation-card.component";
import { FormationArticleComponent } from "./formation-article/formation-article.component";
import { FormationsService } from './formation.service';

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

  ngOnInit(): void {
    this.formationsService.loadFormations();

    this.items.set(this.formationsService.loadedFormations());
  }

  onSelectFormation(formation : Formation){
    this.selectedItem = formation;
  }

}
