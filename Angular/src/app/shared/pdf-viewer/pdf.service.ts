import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private pdfUrl = 'https://clubrunner.blob.core.windows.net/00000100463/en-ca/files/homepage/sample-pdf-page/SamplePDFPage.pdf'; // Replace with your PDF URL

  constructor(private http: HttpClient) {}

  getPDF(pdfUrl: string): Promise<Blob | undefined> {
    console.log("pdfUrl", pdfUrl)
    return this.http.get(pdfUrl, { responseType: 'blob' })
      .toPromise();
  }
}