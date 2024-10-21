import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentQuestionComponent } from './frequent-question.component';

describe('FrequentQuestionComponent', () => {
  let component: FrequentQuestionComponent;
  let fixture: ComponentFixture<FrequentQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequentQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
