import { Component, inject, input, OnInit } from '@angular/core';
import { Certification } from '../certification.model';
import { PdfViewerComponent } from "../../shared/pdf-viewer/pdf-viewer.component";

@Component({
  selector: 'app-certification-article',
  imports: [PdfViewerComponent],
  templateUrl: './certification-article.component.html',
  styleUrl: './certification-article.component.css'
})
export class CertificationArticleComponent implements OnInit {
  pdfData: Blob | null = null;
  certification = input<Certification>();

  async ngOnInit() {
  }
}
