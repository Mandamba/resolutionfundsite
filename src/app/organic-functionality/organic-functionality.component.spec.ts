import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFunctionalityComponent } from './organic-functionality.component';

describe('OrganicFunctionalityComponent', () => {
  let component: OrganicFunctionalityComponent;
  let fixture: ComponentFixture<OrganicFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganicFunctionalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganicFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
