import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Stock, StockDto, StockResponse } from '../interfaces/stock';
import { BaseService } from 'app/core/services/base.service';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseService<StockResponse, StockDto> {

  //@ts-ignore
  private _stock: BehaviorSubject<Stock> = new BehaviorSubject(null);
  //@ts-ignore
  private _stocks: BehaviorSubject<Stock[]> = new BehaviorSubject(null);


  constructor(http: HttpClient) {
    super(http, "v1/stocks/list");
  }


  get stock$(): Observable<Stock> {
    return this._stock.asObservable();
  }


  get stocks$(): Observable<Stock[]> {
    return this._stocks.asObservable();
  }

  getStocks(): Observable<Stock[]> {
    const url = environment.apiURL;
    return this.http.get<StockResponse>(`${url}/v1/stocks/list`).pipe(
      map((res: StockResponse) => { return res.stocks }),
      tap((stocks) => this._stocks.next(stocks))
    );
  }
}
