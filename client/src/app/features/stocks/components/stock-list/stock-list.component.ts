import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { UntypedFormControl } from '@angular/forms';
import { filter, fromEvent, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Stock, StockResponse } from "../../interfaces/stock";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListComponent implements OnInit, OnDestroy {

  stocks$: Observable<Stock[]> | undefined;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  stocksCount: number = 0;
  selectedStock: Stock | undefined;
  drawerMode?: 'side' | 'over';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private stockService: StockService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef,) {

  }

  ngOnInit(): void {
    this.stocks$ = this.stockService.stocks$;
    this.stockService.stocks$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((stocks: Stock[]) => {
        // Update the counts
        this.stocksCount = stocks.length;
        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  onBackdropClicked(): void
  {
    // Go back to the list
    this._router.navigate(['./'], {relativeTo: this._activatedRoute});

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }
}
