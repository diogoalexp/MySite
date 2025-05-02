import { Injectable, signal } from '@angular/core';

import { Certification } from './certification.model';

@Injectable({providedIn: 'root'})
export class CertificationService {
  private certifications = signal<Certification[]>([]);

  loadedCertifications = this.certifications.asReadonly();

  loadCertifications() {
    var data = require('./certification.data.json');

    this.certifications.set(data)
  }
}
