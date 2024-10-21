import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInfoCardComponent } from './banner-info-card.component';

describe('BannerInfoCardComponent', () => {
  let component: BannerInfoCardComponent;
  let fixture: ComponentFixture<BannerInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
