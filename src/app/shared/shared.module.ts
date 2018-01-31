import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './modules/loading/loading.component';
import { DefaultImageDirective } from './directives/defautImage.directive';
import { AlertComponent } from './modules/alert/alert.component';
import { PageHeaderComponent } from './modules/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    DefaultImageDirective,
    AlertComponent,
    PageHeaderComponent,
    PageHeaderComponent
  ],
  exports: [
    LoadingComponent,
    DefaultImageDirective,
    AlertComponent,
    PageHeaderComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
