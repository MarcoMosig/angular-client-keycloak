import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksResolver } from './stocks.resolver';

const routes: Routes = [
    {
        path: '',
        component: StockComponent,
        children: [
            {
                path: '',
                component: StockListComponent,
                resolve: {
                    stocks: StocksResolver
                }
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StocksRoutingModule { }