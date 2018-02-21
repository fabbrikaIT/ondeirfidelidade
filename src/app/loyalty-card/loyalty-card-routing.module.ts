import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoyaltyCardComponent } from './loyalty-card.component';

const routes: Routes = [
    { path: '', component: LoyaltyCardComponent },
    { path: ':qrHash/:userId', component: LoyaltyCardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoyaltyCardRoutingModule {}
