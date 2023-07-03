import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {StockDetailResponse} from '../../interfaces/stock';
import {StockService} from '../../services/stock.service';
import {ActivatedRoute} from '@angular/router';
import {ApexOptions} from "ng-apexcharts";
import {DateTime} from 'luxon';

const now = DateTime.now();
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
  // @ts-ignore
  chartVisitors: ApexOptions;
  data: any;

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
          // Prepare Series data
          this._prepareSeriesData();
          // Prepare the chart data
          this._prepareChartData();
          this._changeDetectorRef.markForCheck();
        }
      )
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  private _prepareSeriesData(): void {
    this.data = {
      "s1": [
        {
          name: "StockPrices",
          data: [
            {
              x: now.minus({months: 12}).plus({day: 1}).toJSDate(),
              y: 4884
            },
            {
              x: now.minus({months: 12}).plus({day: 4}).toJSDate(),
              y: 5351
            },
            {
              x: now.minus({months: 12}).plus({day: 7}).toJSDate(),
              y: 5293
            },
          ]
        }
      ]
    };
  }

  private _prepareChartData(): void
  {
    // Visitors
    this.chartVisitors = {
      chart     : {
        animations: {
          speed           : 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: 'inherit',
        foreColor : 'inherit',
        width     : '100%',
        height    : '100%',
        type      : 'area',
        toolbar   : {
          show: false
        },
        zoom      : {
          enabled: false
        }
      },
      colors    : ['#818CF8'],
      dataLabels: {
        enabled: false
      },
      fill      : {
        colors: ['#312E81']
      },
      grid      : {
        show       : true,
        borderColor: '#334155',
        padding    : {
          top   : 10,
          bottom: -40,
          left  : 0,
          right : 0
        },
        position   : 'back',
        xaxis      : {
          lines: {
            show: true
          }
        }
      },
      series    : this.data.stockprice.series,
      stroke    : {
        width: 2
      },
      tooltip   : {
        followCursor: true,
        theme       : 'dark',
        x           : {
          format: 'MMM dd, yyyy'
        },
        y           : {
          formatter: (value: number): string => `${value}`
        }
      },
      xaxis     : {
        axisBorder: {
          show: false
        },
        axisTicks : {
          show: false
        },
        crosshairs: {
          stroke: {
            color    : '#475569',
            dashArray: 0,
            width    : 2
          }
        },
        labels    : {
          offsetY: -20,
          style  : {
            colors: '#CBD5E1'
          }
        },
        tickAmount: 20,
        tooltip   : {
          enabled: false
        },
        type      : 'datetime'
      },
      yaxis     : {
        axisTicks : {
          show: false
        },
        axisBorder: {
          show: false
        },
        min       : (min): number => min - 750,
        max       : (max): number => max + 250,
        tickAmount: 5,
        show      : false
      }
    };
  }
}
