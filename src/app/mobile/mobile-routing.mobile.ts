import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileComponent } from './mobile.component';

const routes: Routes = [
    {
      path: '', component: MobileComponent,
      children: [
        { path: 'loyalty/:cityId', loadChildren: './list-loyalty/list-loyalty.module#ListLoyaltyModule' },
        { path: 'loyalty/details', loadChildren: './loyalty-details/loyalty-details.module#ListLoyaltyModule' },
        { path: 'loyalty/user/:userId', loadChildren: './user-loyalty/user-loyalty.module#UserLoyaltyModule' },
        { path: 'offers/details', loadChildren: './offers-details/offers-detail.module#OffersDetailsModule' },
        { path: 'offers/user/:userId', loadChildren: './user-offers/user-offers.module#UserOffersModule' },
        { path: 'offers/:cityId', loadChildren: './list-offers/list-offers.module#ListOffersModule' }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobileRoutingModule {}
