import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShellComponent } from "./shell.component";

const routes: Routes = [
  {
    path: "", component: ShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
      { path: 'owner', loadChildren: './owner/owner.module#OwnerModule' },
      { path: 'loyalty', loadChildren: './loyalty/loyalty.module#LoyaltyModule' },
      { path: 'offers', loadChildren: './offers/offers.module#OffersModule' },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
