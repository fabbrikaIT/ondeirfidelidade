import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { OffersRoutingModule } from "./offers-routing.module";
import { OffersComponent } from "./offers.component";

@NgModule({
  imports: [CommonModule, FormsModule, OffersRoutingModule, SharedModule],
  declarations: [OffersComponent],
  providers: []
})
export class OffersModule {}
