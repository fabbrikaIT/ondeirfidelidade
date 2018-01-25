import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, ProfileRoutingModule, SharedModule],
  declarations: [ProfileComponent],
  providers: []
})
export class ProfileModule {}
