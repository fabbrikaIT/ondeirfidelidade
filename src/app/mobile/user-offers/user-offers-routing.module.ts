import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserOffersComponent } from './user-offers.component';

const routes: Routes = [
    { path: '', component: UserOffersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserOffersRoutingModule {}
