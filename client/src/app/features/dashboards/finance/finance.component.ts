import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { FinanceService } from './finance.service';

@Component({
  selector: 'finance',
  templateUrl: './finance.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinanceComponent implements OnInit, AfterViewInit, OnDestroy {

  data: any;
  accountBalanceOptions: ApexOptions = {};
  recentTransactionsTableColumns: string[] = ['transactionId', 'date', 'name', 'amount', 'status'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _financeService: FinanceService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}

