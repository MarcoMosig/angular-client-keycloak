import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, map, takeUntil } from 'rxjs';
import { Stock, StockDetailResponse } from '../../interfaces/stock';
import { StockService } from '../../services/stock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsComponent implements OnInit, OnDestroy {

  stockDetail: StockDetailResponse | undefined;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private stockService: StockService
  ) {

  }

  ngOnInit(): void {
    this.stockService.stock$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (res: StockDetailResponse) => {
          this.stockDetail = { ...res };
          this._changeDetectorRef.markForCheck();
        }
      )
  }


  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
