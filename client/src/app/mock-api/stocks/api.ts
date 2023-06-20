import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@finvest/lib/mock-api';
import { stockprices as stockData } from 'app/mock-api/stocks/data';

@Injectable({
  providedIn: 'root'
})
export class StockPriceMockApi
{
  private _stockprices: any = stockData;

  /**
   * Constructor
   */
  constructor(private _fuseMockApiService: FuseMockApiService)
  {
    // Register Mock API handlers
    this.registerHandlers();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Register Mock API handlers
   */
  registerHandlers(): void
  {
    // -----------------------------------------------------------------------------------------------------
    // @ Sales - GET
    // -----------------------------------------------------------------------------------------------------
    this._fuseMockApiService
      .onGet('api/stocks')
      .reply(() => [200, cloneDeep(this._stockprices)]);
  }
}
