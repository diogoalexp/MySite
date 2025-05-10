import { Component, input, output } from '@angular/core';
import { Formation } from '../formation.model';

@Component({
  selector: 'app-formation-card',
  imports: [],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.css'
})
export class FormationCardComponent {
  formation = input.required<Formation>();
  isSelected = input.required<Boolean>();

  cardStyle = () =>{
    return this.isSelected() ? "card-selected" : ""
  }
}
