import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksRoutingModule } from './stocks-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockComponent } from './stock.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';


@NgModule({
  declarations: [
    StockListComponent,
    StockCardComponent,
    StockComponent,
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    SharedModule,
  ]
})
export class StocksModule { }
