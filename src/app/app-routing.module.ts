import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./shared/guard/auth.guard";

const routes: Routes = [
  { path: '', loadChildren: "./shell/shell.module#ShellModule", canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'card', loadChildren: './loyalty-card/loyalty-card.module#LoyaltyCardModule' },
  { path: 'coupon', loadChildren: './offer-coupon/offer-coupon.module#OfferCouponModule' },
  { path: 'mobile', loadChildren: './mobile/mobile.mobile#MobileModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  // Routing debbuging configurations.
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
