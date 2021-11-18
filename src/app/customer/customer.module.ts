import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DataComponent } from './data/data.component';
import { GoodDataComponent } from './good-data/good-data.component';


@NgModule({
  declarations: [
    DataComponent,
    GoodDataComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
