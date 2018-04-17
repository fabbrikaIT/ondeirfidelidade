import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputMaskModule } from "ng2-inputmask";
import { ModalModule } from 'ngx-bootstrap';

import { SharedModule } from "./../../shared/shared.module";
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsService } from './../../shared/services/reports.service';
import { LoyaltyProgramsComponent } from './loyalty-programs/loyalty-programs.component';
import { OffersCouponsComponent } from './offers-coupons/offers-coupons.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InputMaskModule,
    ModalModule.forRoot()
  ],
  declarations: [
    LoyaltyProgramsComponent,
    OffersCouponsComponent,
    ClientsComponent
  ],
  providers: [
    ReportsService
  ]
})
export class ReportsModule {}
