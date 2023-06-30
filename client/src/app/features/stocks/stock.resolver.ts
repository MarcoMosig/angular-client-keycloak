import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { StockService } from './services/stock.service';
import { Stock, StockDetailResponse } from './interfaces/stock';


@Injectable({
    providedIn: 'root'
})
export class StockResolver implements Resolve<any> {
    constructor(
        private _router: Router,
        private _stockService: StockService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StockDetailResponse> {
        const id = route.paramMap.get('id');
        return this._stockService.getStock(id)
            .pipe(
                // Error here means the requested task is not available
                catchError((error) => {

                    // Log the error
                    console.error(error);

                    // Get the parent url
                    const parentUrl = state.url.split('/').slice(0, -1).join('/');

                    // Navigate to there
                    this._router.navigateByUrl(parentUrl);

                    // Throw an error
                    return throwError(error);
                })
            );
    }
}