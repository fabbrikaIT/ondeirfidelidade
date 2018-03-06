import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgQrScannerModule } from 'angular2-qrscanner';

import { SharedModule } from '../../shared/shared.module';
import { OffersDetailsRoutingModule } from './offers-details-routing.module';
import { OffersDetailsComponent } from './offers-details.component';
import { OffersService } from '../../shared/services/offers.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OffersDetailsRoutingModule,
    SharedModule,
    HttpClientModule,
    NgQrScannerModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    OffersDetailsComponent
  ],
  providers: [
    OffersService
  ]
})
export class OffersDetailsModule {}
