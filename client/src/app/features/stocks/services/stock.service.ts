import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StockDto, StockResponse} from '../interfaces/stock';
import {BaseService} from 'app/core/services/base.service';
import {environment} from "environments/environment";

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
