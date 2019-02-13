import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NumberInputComponent} from './components/number-input/number-input.component';

@NgModule({
  imports: [
	CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    NumberInputComponent
  ]
})
export class AngularNumberInputModule { }
