import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MfSharedModule } from 'mf-shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
