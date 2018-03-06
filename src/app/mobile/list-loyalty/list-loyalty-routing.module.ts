import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLoyaltyComponent } from './list-loyalty.component';

const routes: Routes = [
    { path: '', component: ListLoyaltyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListLoyaltyRoutingModule {}
