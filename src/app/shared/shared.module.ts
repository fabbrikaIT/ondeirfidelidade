import { NgModule } from '@angular/core';
import { LoadingComponent } from './modules/loading/loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedModule {}
