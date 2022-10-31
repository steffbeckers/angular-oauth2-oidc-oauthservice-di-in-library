import { DummyService } from '@angular-oauth2-oidc-oauthservice-di-in-library/dev-lib';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [DummyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
