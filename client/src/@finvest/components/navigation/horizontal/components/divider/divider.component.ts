import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FinvestHorizontalNavigationComponent } from '@finvest/components/navigation/horizontal/horizontal.component';
import { FinvestNavigationService } from '@finvest/components/navigation/navigation.service';
import { FinvestNavigationItem } from '@finvest/components/navigation/navigation.types';

@Component({
  selector: 'fuse-horizontal-navigation-divider-item',
  templateUrl: './divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinvestHorizontalNavigationDividerItemComponent implements OnInit, OnDestroy {
  @Input() item: FinvestNavigationItem | undefined;
  @Input() name: string = "";

  private _fuseHorizontalNavigationComponent: FinvestHorizontalNavigationComponent | undefined;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseNavigationService: FinvestNavigationService
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the parent navigation component
    this._fuseHorizontalNavigationComponent = this._fuseNavigationService.getComponent(this.name);

    // Subscribe to onRefreshed on the navigation component
    this._fuseHorizontalNavigationComponent?.onRefreshed.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(() => {

      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}

