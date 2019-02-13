import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularNumberInputModule } from 'angular-numberic-input/index';
import { NgxLineChartModule } from 'ngx-line-chart';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLineChartModule,
    AngularNumberInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
