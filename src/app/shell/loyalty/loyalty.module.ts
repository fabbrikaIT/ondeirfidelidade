import {InputMaskModule} from '../../../../node_modules/ng2-inputmask/src/input-mask.module';
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { QRCodeModule } from 'angular2-qrcode';

import { LoyaltyRoutingModule } from './loyalty-routing.module';
import { LoyaltyComponent } from "./loyalty.component";
import { LoyaltyService } from './../../shared/services/loyalty.service';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoyaltyRoutingModule,
    SharedModule,
    InputMaskModule,
    QRCodeModule,
    NgbDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BootstrapSwitchModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  declarations: [
    LoyaltyComponent,
    DetailsComponent
  ],
  providers: [
    LoyaltyService
  ]
})
export class LoyaltyModule {}
