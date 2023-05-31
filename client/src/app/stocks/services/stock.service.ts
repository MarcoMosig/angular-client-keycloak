import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';


@Injectable({
    providedIn: 'root'
})
export class StockService {

    private stockUrl: string;

    constructor(private http: HttpClient) {
        this.stockUrl = 'http://localhost:8081/v1/stocks/list';
    }

    public findAll(): Observable<Stock[]> {
        return this.http.get<Stock[]>(this.stockUrl);
    }

    public save(stock: Stock) {
        this.http.post<Stock>(this.stockUrl, stock).subscribe(result => console.log(result));
    }
}