import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoyaltyComponent } from './loyalty.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: '', component: LoyaltyComponent},
    { path: 'details', component: DetailsComponent},
    { path: 'details/:id', component: DetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoyaltyRoutingModule {

}
