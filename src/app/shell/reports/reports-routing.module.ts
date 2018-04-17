import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { LoyaltyProgramsComponent } from './loyalty-programs/loyalty-programs.component';
import { OffersCouponsComponent } from './offers-coupons/offers-coupons.component';


const routes: Routes = [
    { path: 'clients', component: ClientsComponent  },
    { path: 'coupons', component: OffersCouponsComponent  },
    { path: 'programs', component: LoyaltyProgramsComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule {

}
