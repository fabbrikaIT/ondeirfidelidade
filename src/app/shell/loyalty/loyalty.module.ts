import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LoyaltyRoutingModule } from './loyalty-routing.module';
import { LoyaltyComponent } from "./loyalty.component";
import { LoyaltyService } from './../../shared/services/loyalty.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoyaltyRoutingModule,
    SharedModule,
    NgbDropdownModule.forRoot()
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
