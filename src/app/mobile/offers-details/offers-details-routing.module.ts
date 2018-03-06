import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersDetailsComponent } from './offers-details.component';

const routes: Routes = [
    { path: ':id', component: OffersDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OffersDetailsRoutingModule {}
