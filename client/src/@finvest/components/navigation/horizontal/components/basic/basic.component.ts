import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IsActiveMatchOptions } from '@angular/router';
import { FinvestNavigationItem } from '@finvest/components/navigation/navigation.types';

@Component({
  selector: 'fuse-horizontal-navigation-basic-item',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class FinvestHorizontalNavigationBasicItemComponent implements OnInit, OnDestroy {
  @Input() item: FinvestNavigationItem | undefined;
  @Input() name: string = "";

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  isActiveMatchOptions: IsActiveMatchOptions = { matrixParams: "exact", queryParams: "exact", paths: "exact", fragment: "exact" };

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
