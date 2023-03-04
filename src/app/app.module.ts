import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiNavbarModule } from 'projects/ngx-devjagz-navbar/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiNavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
