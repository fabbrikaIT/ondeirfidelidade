import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoyaltyComponent } from './user-loyalty.component';

const routes: Routes = [
    { path: '', component: UserLoyaltyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListLoyaltyRoutingModule {}
