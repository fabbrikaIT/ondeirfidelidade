import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { UserOffersRoutingModule } from './user-offers-routing.module';
import { UserOffersComponent } from './user-offers.component';
import { OffersService } from './../../shared/services/offers.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserOffersRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    UserOffersComponent
  ],
  providers: [
    OffersService
  ]
})
export class UserOffersModule {}
