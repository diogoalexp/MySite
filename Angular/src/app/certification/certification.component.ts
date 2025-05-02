import { Component, inject, signal } from '@angular/core';
import { Certification } from './certification.model';
import { CertificationCardComponent } from "./certification-card/certification-card.component";
import { CertificationService } from './certification.service';
import { CertificationArticleComponent } from "./certification-article/certification-article.component";

@Component({
  selector: 'app-certification',
  imports: [CertificationCardComponent, CertificationArticleComponent],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {
  private certificationService = inject(CertificationService);
  items = signal<Certification[]>([]);
  selectedItem?: Certification = this.items()[0];

  ngOnInit(): void {
    this.certificationService.loadCertifications();

    this.items.set(this.certificationService.loadedCertifications());
  }

  onSelectCertification(certification : Certification){
    this.selectedItem = certification;
  }

}
