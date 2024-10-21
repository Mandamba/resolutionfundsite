import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAndAccountsComponent } from './reports-and-accounts.component';

describe('ReportsAndAccountsComponent', () => {
  let component: ReportsAndAccountsComponent;
  let fixture: ComponentFixture<ReportsAndAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsAndAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAndAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
