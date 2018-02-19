import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { QRCodeModule, QRCodeComponent } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/guard/auth.guard';
import { AppConfig } from './shared/config/app.config';
import { LoadingComponent } from './shared/modules/loading/loading.component';
import { SharedModule } from './shared/shared.module';
import { AlertService } from './shared/modules/alert/alert.service';
import { DialogService } from './shared/modules/dialog/dialog.service';
import { AdDirective } from './shared/modules/dialog/dialog.component';
import { QrcodeComponent } from './shell/loyalty/qrcode/qrcode.component';
import { CardComponent } from './shell/loyalty/card/card.component';
import { VoucherComponent } from './shell/offers/voucher/voucher.component';
import { UnauthorizedInterceptor } from './shared/interceptors/unauthorized.interceptor';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    QrcodeComponent,
    CardComponent,
    VoucherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    QRCodeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-br" },
    AuthGuard,
    AppConfig,
    AlertService,
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  exports: [
    QRCodeComponent
  ],
  entryComponents: [
    QrcodeComponent,
    CardComponent,
    VoucherComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
