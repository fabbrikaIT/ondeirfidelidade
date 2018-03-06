import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoyaltyDetailsComponent } from './loyalty-details.component';

const routes: Routes = [
    { path: ':id', component: LoyaltyDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoyaltyDetailsRoutingModule {}
