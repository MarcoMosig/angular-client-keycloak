import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { StocksRoutingModule } from './stocks-rounting.module';



@NgModule({
  declarations: [
    StockListComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
  ]
})
export class StocksModule { }
