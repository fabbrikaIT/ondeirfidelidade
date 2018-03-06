import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferCouponComponent } from './offer-coupon.component';

const routes: Routes = [
    { path: '', component: OfferCouponComponent },
    { path: ':qrHash/:userId', component: OfferCouponComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OfferCouponRoutingModule {}
