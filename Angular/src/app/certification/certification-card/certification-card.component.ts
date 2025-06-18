import { Component, inject, input } from '@angular/core';
import { Certification } from '../certification.model';
import { DatePipe } from '@angular/common';
import { WindowRef } from '../../shared/WindowRef';

@Component({
  selector: 'app-certification-card',
  imports: [DatePipe],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.css'
})
export class CertificationCardComponent {
  certification = input.required<Certification>();
  isSelected = input.required<Boolean>();
  private windowRef = inject(WindowRef);

  onClickExternalLink = () =>{
    this.windowRef.nativeWindow?.open(this.certification().url , '_blank');
  }

  cardStyle = () =>{
    return this.isSelected() ? "card-selected" : ""
  }
}
