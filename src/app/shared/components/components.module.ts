import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleAlertComponent } from './simple-alert/simple-alert.component';



@NgModule({
  declarations: [
    SimpleAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleAlertComponent
  ]
})
export class ComponentsModule { }
