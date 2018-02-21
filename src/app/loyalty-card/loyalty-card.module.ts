import { AuthService } from './../shared/services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { LoyaltyCardRoutingModule } from './loyalty-card-routing.module';
import { LoyaltyCardComponent } from './loyalty-card.component';
import { LoyaltyService } from '../shared/services/loyalty.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoyaltyCardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbAlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [LoyaltyCardComponent],
  providers: [
    LoyaltyService
  ]
})
export class LoyaltyCardModule {}
