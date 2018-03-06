import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCouponComponent } from './offer-coupon.component';

describe('OfferCouponComponent', () => {
  let component: OfferCouponComponent;
  let fixture: ComponentFixture<OfferCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
