import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@core/services/base.service';
import { Observable, map } from 'rxjs';
import { environment } from '@environment/environment'
import { Stock, StockDto, StockResponse } from '../interfaces/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseService<StockResponse, StockDto> {

  constructor(http: HttpClient) {
    super(http, "v1/stocks/list");
  }

  getAll(): Observable<StockResponse> {
    const url = environment.apiURL;
    return this.http.get<StockResponse>(`${url}/v1/stocks/list`);
  }
}
