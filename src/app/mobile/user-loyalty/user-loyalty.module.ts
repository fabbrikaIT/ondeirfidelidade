import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListLoyaltyRoutingModule } from './user-loyalty-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoyaltyService } from './../../shared/services/loyalty.service';
import { UserLoyaltyComponent } from './user-loyalty.component';

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
    UserLoyaltyComponent
  ],
  providers: [
    LoyaltyService
  ]
})
export class UserLoyaltyModule {}
