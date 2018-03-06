import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { OfferCouponComponent } from './offer-coupon.component';
import { OfferCouponRoutingModule } from './offer-coupon-routing.module';
import { OffersService } from './../shared/services/offers.service';
import { AuthService } from './../shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfferCouponRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [OfferCouponComponent],
  providers: [
    OffersService
  ]
})
export class OfferCouponModule {}
