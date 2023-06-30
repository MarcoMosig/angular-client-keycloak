import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Stock, StockDto, StockListResponse, StockDetailResponse } from '../interfaces/stock';
import { BaseService } from 'app/core/services/base.service';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseService<StockListResponse, StockDto> {

  //@ts-ignore
  private _stock: BehaviorSubject<StockDetailResponse> = new BehaviorSubject(null);
  //@ts-ignore
  private _stocks: BehaviorSubject<Stock[]> = new BehaviorSubject(null);


  constructor(http: HttpClient) {
    super(http, "v1/stocks/");
  }


  get stock$(): Observable<StockDetailResponse> {
    return this._stock.asObservable();
  }


  get stocks$(): Observable<Stock[]> {
    return this._stocks.asObservable();
  }

  getStocks(): Observable<Stock[]> {
    const url = environment.apiURL;
    return this.http.get<StockListResponse>(`${url}/v1/stocks/list`).pipe(
      map((res: StockListResponse) => { return res.data }),
      tap((stocks) => this._stocks.next(stocks))
    );
  }

  getStock(stockID: string | null | undefined): Observable<StockDetailResponse> {
    const url = environment.apiURL;
    return this.http.get<StockDetailResponse>(`${url}/v1/stock/${stockID}`).pipe(
      map((res: StockDetailResponse) => { return res }),
      tap((stock) => this._stock.next(stock))
    );
  }

  searchStocks(query: string): Observable<Stock[]> {
    const url = environment.apiURL;
    return this.http.get<StockListResponse>(`${url}/v1/stocks/search`, {
      params: { "company": query }
    }).pipe(
      map((res: StockListResponse) => { return res.data }),
      tap((stocks) => this._stocks.next(stocks))
    );
  }
}
