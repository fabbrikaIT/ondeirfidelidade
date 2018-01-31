import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LoyaltyRoutingModule } from './loyalty-routing.module';
import { LoyaltyComponent } from "./loyalty.component";
import { LoyaltyService } from './../../shared/services/loyalty.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoyaltyRoutingModule,
    SharedModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [LoyaltyComponent],
  providers: [LoyaltyService]
})
export class LoyaltyModule {}
