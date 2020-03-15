import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularInputNumberModule } from 'angular-input-number';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularInputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
