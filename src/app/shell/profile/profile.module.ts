import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputMaskModule } from "ng2-inputmask";

import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { OwnerService } from './../../shared/services/owner.service';
import { SharedModule } from "./../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InputMaskModule,
  ],
  declarations: [ProfileComponent],
  providers: [
    OwnerService
  ]
})
export class ProfileModule {}
