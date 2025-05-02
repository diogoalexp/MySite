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
  pdfSafeUrl = signal<SafeHtml>("") ;
  pdfUrl = input.required<string>();

  constructor(private pdfService: PdfService, protected _sanitizer: DomSanitizer) {}

  async ngOnInit() {
    const blob = await this.pdfService.getPDF(this.pdfUrl())!


    let url = window.URL.createObjectURL(blob!);

    // this.pdfUrl = url;
    this.pdfSafeUrl?.set(this._sanitizer.bypassSecurityTrustResourceUrl(url));
  }

  getUrl = () =>{
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl());
  }
}
