import { Component, input } from '@angular/core';
import { Formation } from '../formation.model';

@Component({
  selector: 'app-formation-article',
  imports: [],
  templateUrl: './formation-article.component.html',
  styleUrl: './formation-article.component.css'
})
export class FormationArticleComponent {
  formation = input.required<Formation>();
}
