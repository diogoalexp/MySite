import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor(private http: HttpClient) {}

  getPDF(pdfUrl: string): Promise<Blob | undefined> {
    console.log("pdfUrl", pdfUrl)
    return this.http.get(pdfUrl, { responseType: 'blob' })
      .toPromise();
  }
}