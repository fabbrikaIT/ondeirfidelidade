import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgQrScannerModule } from 'angular2-qrscanner';

import { SharedModule } from '../../shared/shared.module';
import { LoyaltyService } from './../../shared/services/loyalty.service';
import { LoyaltyDetailsRoutingModule } from './loyalty-details-routing.module';
import { LoyaltyDetailsComponent } from './loyalty-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoyaltyDetailsRoutingModule,
    SharedModule,
    HttpClientModule,
    NgQrScannerModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    LoyaltyDetailsComponent
  ],
  providers: [
    LoyaltyService
  ]
})
export class ListLoyaltyModule {}
