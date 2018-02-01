import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './modules/loading/loading.component';
import { DefaultImageDirective } from './directives/defautImage.directive';
import { AlertComponent } from './modules/alert/alert.component';
import { PageHeaderComponent } from './modules/page-header/page-header.component';
import { FieldControlErrorComponent } from './modules/field-control-error/field-control-error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    DefaultImageDirective,
    AlertComponent,
    PageHeaderComponent,
    PageHeaderComponent,
    FieldControlErrorComponent
  ],
  exports: [
    LoadingComponent,
    DefaultImageDirective,
    AlertComponent,
    PageHeaderComponent,
    FieldControlErrorComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
