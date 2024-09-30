import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsEntitiesComponent } from './participants-entities.component';

describe('ParticipantsEntitiesComponent', () => {
  let component: ParticipantsEntitiesComponent;
  let fixture: ComponentFixture<ParticipantsEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantsEntitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantsEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
