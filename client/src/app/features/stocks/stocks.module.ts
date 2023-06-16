import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksRoutingModule } from './stocks-rounting.module';
import { SharedModule } from 'app/shared/shared.module';
import { StockComponent } from './stock.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    StockListComponent,
    StockCardComponent,
    StockComponent,
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatLuxonDateModule,
    SharedModule,
  ]
})
export class StocksModule { }
