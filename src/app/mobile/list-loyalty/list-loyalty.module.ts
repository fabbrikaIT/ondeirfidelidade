import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListLoyaltyRoutingModule } from './list-loyalty-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListLoyaltyComponent } from './list-loyalty.component';
import { LoyaltyService } from './../../shared/services/loyalty.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListLoyaltyRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    ListLoyaltyComponent
  ],
  providers: [
    LoyaltyService
  ]
})
export class ListLoyaltyModule {}
