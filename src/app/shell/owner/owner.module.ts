import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputMaskModule } from 'ng2-inputmask';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerService } from './../../shared/services/owner.service';
import { SharedModule } from "./../../shared/shared.module";
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwnerRoutingModule,
    SharedModule,
    InputMaskModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [OwnerComponent, DetailsComponent],
  providers: [
    OwnerService
  ]
})
export class OwnerModule {}
