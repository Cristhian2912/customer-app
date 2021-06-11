import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ListComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule,
    FontAwesomeModule
  ]
})
export class ListModule { }
