import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksResolver } from './stocks.resolver';
import { StocksPricesResolver } from "./stocks-prices.resolver";
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StockResolver } from './stock.resolver';

const routes: Routes = [
    {
        path: '',
        component: StockComponent,
        children: [
            {
                path: '',
                component: StockListComponent,
                resolve: {
                    stocks: StocksResolver,
                    prices: StocksPricesResolver,
                }
            },
            {
                path: ':id',
                resolve: {
                    stock: StockResolver
                },
                component: StockDetailsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StocksRoutingModule { }
