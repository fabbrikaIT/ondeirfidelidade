import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';


@NgModule({
  imports: [CommonModule, FormsModule, OwnerRoutingModule, SharedModule],
  declarations: [OwnerComponent],
  providers: []
})
export class OwnerModule {}
