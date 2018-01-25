import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [
    ShellComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ShellModule {

}
