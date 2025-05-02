import { Component, input, signal } from '@angular/core';
import { PdfService } from './pdf.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  imports: [],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
  pdfUrl = input.required<string>();

  constructor(private pdfService: PdfService, protected _sanitizer: DomSanitizer) {}


  getUrl = () =>{
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl());
  }
}
