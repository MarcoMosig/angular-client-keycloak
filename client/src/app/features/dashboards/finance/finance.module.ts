import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';


@NgModule({
  declarations: [
    FinanceComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
