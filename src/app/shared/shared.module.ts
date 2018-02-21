import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './modules/loading/loading.component';
import { DefaultImageDirective } from './directives/defautImage.directive';
import { FocusDirective } from './directives/focus.directive';
import { AlertComponent } from './modules/alert/alert.component';
import { PageHeaderComponent } from './modules/page-header/page-header.component';
import { FieldControlErrorComponent } from './modules/field-control-error/field-control-error.component';
import { DialogComponent } from './modules/dialog/dialog.component';
import { ModalModule } from 'ngx-bootstrap';
import { QrcodeComponent } from '../shell/loyalty/qrcode/qrcode.component';
import { DynamicViewComponent } from './modules/dynamic-view/dynamic-view.component';
import { ToggleSelectDirective } from './directives/toggleSelect.directive';
import { StatComponent } from './modules/stat/stat.component';

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
    DialogComponent,
    DynamicViewComponent,
    FocusDirective,
    ToggleSelectDirective,
    StatComponent
  ],
  exports: [
    LoadingComponent,
    DefaultImageDirective,
    AlertComponent,
    PageHeaderComponent,
    FieldControlErrorComponent,
    DialogComponent,
    FocusDirective,
    ToggleSelectDirective,
    StatComponent,
    DynamicViewComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
