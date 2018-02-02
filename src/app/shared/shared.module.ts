import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './modules/loading/loading.component';
import { DefaultImageDirective } from './directives/defautImage.directive';
import { AlertComponent } from './modules/alert/alert.component';
import { PageHeaderComponent } from './modules/page-header/page-header.component';
import { FieldControlErrorComponent } from './modules/field-control-error/field-control-error.component';
import { DialogComponent } from './modules/dialog/dialog.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [
    LoadingComponent,
    DefaultImageDirective,
    AlertComponent,
    PageHeaderComponent,
    PageHeaderComponent,
    FieldControlErrorComponent,
    DialogComponent
  ],
  exports: [
    LoadingComponent,
    DefaultImageDirective,
    AlertComponent,
    PageHeaderComponent,
    FieldControlErrorComponent,
    DialogComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
