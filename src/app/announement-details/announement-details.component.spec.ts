import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounementDetailsComponent } from './announement-details.component';

describe('AnnounementDetailsComponent', () => {
  let component: AnnounementDetailsComponent;
  let fixture: ComponentFixture<AnnounementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnounementDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnounementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
