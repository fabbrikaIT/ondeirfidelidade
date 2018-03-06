import { MobileComponent } from './mobile.component';
import { AuthService } from './../shared/services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { MobileRoutingModule } from './mobile-routing.mobile';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MobileRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    MobileComponent
  ],
  providers: [

  ]
})
export class MobileModule {}
