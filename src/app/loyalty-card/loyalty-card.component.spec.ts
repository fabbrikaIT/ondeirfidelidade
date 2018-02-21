import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyCardComponent } from './loyalty-card.component';

describe('LoyaltyCardComponent', () => {
  let component: LoyaltyCardComponent;
  let fixture: ComponentFixture<LoyaltyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
