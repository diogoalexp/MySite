import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationArticleComponent } from './certification-article.component';

describe('CertificationArticleComponent', () => {
  let component: CertificationArticleComponent;
  let fixture: ComponentFixture<CertificationArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
