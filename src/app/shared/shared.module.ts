import { NgModule } from '@angular/core';
import { LoadingComponent } from './modules/loading/loading.component';
import { CommonModule } from '@angular/common';
import { DefaultImageDirective } from './directives/defautImage.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    DefaultImageDirective
  ],
  exports: [
    LoadingComponent,
    DefaultImageDirective
  ]
})
export class SharedModule {}
