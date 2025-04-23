import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationArticleComponent } from './formation-article.component';

describe('FormationArticleComponent', () => {
  let component: FormationArticleComponent;
  let fixture: ComponentFixture<FormationArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
