import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/guard/auth.guard';
import { AppConfig } from './shared/config/app.config';
import { LoadingComponent } from './shared/modules/loading/loading.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AppConfig
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
