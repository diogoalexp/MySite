import { Component } from '@angular/core';
import { PdfService } from './pdf.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  imports: [],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
  pdfSafeUrl?: SafeHtml;
  pdfUrl?: string;

  constructor(private pdfService: PdfService, protected _sanitizer: DomSanitizer) {}

  async ngOnInit() {
    const blob = await this.pdfService.getPDF()!


    let url = window.URL.createObjectURL(blob!);

    this.pdfUrl = url;
    this.pdfSafeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
