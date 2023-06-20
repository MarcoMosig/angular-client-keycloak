import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { StockService } from './services/stock.service';
import {Stock} from "./interfaces/stock";
import {StockPriceService} from "./services/stock-price.service";

@Injectable({
  providedIn: 'root'
})
export class StocksPricesResolver implements Resolve<any> {
  constructor(private _stockPriceService: StockPriceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stock[]> {
    return this._stockPriceService.getData();
  }
}
