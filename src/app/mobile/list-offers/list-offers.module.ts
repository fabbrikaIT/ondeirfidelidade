import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { ListOffersRoutingModule } from './list-offers-routing.module';
import { ListOffersComponent } from './list-offers.component';
import { OffersService } from './../../shared/services/offers.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListOffersRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    ListOffersComponent
  ],
  providers: [
    OffersService
  ]
})
export class ListOffersModule {}
