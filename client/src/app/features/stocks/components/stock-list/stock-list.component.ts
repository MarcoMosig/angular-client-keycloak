import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, fromEvent, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Stock, StockResponse } from "../../interfaces/stock";
import { ActivatedRoute, Router } from "@angular/router";
import { ApexOptions } from "ng-apexcharts";
import { StockPriceService } from "../../services/stock-price.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListComponent implements OnInit, OnDestroy {

  stocks$: Observable<Stock[]> | undefined;
  data: any;
  chartWeeklyExpenses: ApexOptions = {};
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  stocksCount: number = 0;
  selectedStock: Stock | undefined;
  drawerMode?: 'side' | 'over';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private stockService: StockService,
    private stockPriceService: StockPriceService,
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
    this.stockPriceService.data$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        // Store the data
        this.data = data;
        // Prepare the chart data
        this._prepareChartData();
      });

    // Subscribe to search input field value changes
    this.searchInputControl.valueChanges
      .pipe(
        debounceTime(300),
        takeUntil(this._unsubscribeAll),
        switchMap(query =>
          // Search
          this.stockService.searchStocks(query)
        )
      )
      .subscribe();
  }

  onBackdropClicked(): void {
    // Go back to the list
    this._router.navigate(['./'], { relativeTo: this._activatedRoute });

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  private _prepareChartData(): void {
    this.chartWeeklyExpenses = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: 'inherit',
        foreColor: 'inherit',
        height: '100%',
        type: 'line',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#22D3EE'],
      series: this.data.weeklyExpenses.series,
      stroke: {
        curve: 'smooth'
      },
      tooltip: {
        theme: 'dark'
      },
      xaxis: {
        type: 'category',
        categories: this.data.weeklyExpenses.labels
      },
      yaxis: {
        labels: {
          formatter: (val): string => `$${val}`
        }
      }
    };
  }
}
