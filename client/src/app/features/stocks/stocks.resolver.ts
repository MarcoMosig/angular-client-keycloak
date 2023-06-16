import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { StockService } from './services/stock.service';
import { Stock } from './interfaces/stock';


@Injectable({
    providedIn: 'root'
})
export class StocksResolver implements Resolve<any> {
    constructor(private _stockService: StockService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stock[]> {
        return this._stockService.getStocks();
    }
}