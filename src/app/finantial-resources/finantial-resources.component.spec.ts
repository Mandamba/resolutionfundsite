import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinantialResourcesComponent } from './finantial-resources.component';

describe('FinantialResourcesComponent', () => {
  let component: FinantialResourcesComponent;
  let fixture: ComponentFixture<FinantialResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinantialResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinantialResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
