import { Component, input, OnInit, signal } from '@angular/core';
import { Formation } from './formation.model';
import { FormationCardComponent } from "./formation-card/formation-card.component";
import { FormationArticleComponent } from "./formation-article/formation-article.component";

@Component({
  selector: 'app-formation',
  imports: [FormationCardComponent, FormationArticleComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css',
})
export class FormationComponent implements OnInit {
  items = signal<Formation[]>([]);
  selectedItem?: Formation = this.items()[0];

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.items.update((prev) => [...prev,
        {
          title: "title"+index,
          place: "place"+index,
          description: "description"+index,
          icon: "profile.jpg",
          image: "profile.jpg",
          text: "text"+index
        }
      ])

    }
  }

  onSelectFormation(formation : Formation){
    console.log("clicked", formation)
    this.selectedItem = formation;
  }

}
