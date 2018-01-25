import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    SharedModule,
    NgbAlertModule.forRoot()
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
