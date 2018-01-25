import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./shared/guard/auth.guard";

const routes: Routes = [
  { path: '', loadChildren: "./shell/shell.module#ShellModule", canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
