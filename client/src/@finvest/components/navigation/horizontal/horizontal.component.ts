import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { FinvestNavigationItem } from '../navigation.types';
import { FinvestNavigationService } from '../navigation.service';
import { FinvestUtilsService } from '@finvest/services/utils/utils.service';

@Component({
  selector: 'fuse-horizontal-navigation',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinvestHorizontalNavigationComponent implements OnChanges, OnInit, OnDestroy {

  @Input() name: string = 'horizontal';
  @Input() navigation: FinvestNavigationItem[] | undefined;

  onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _finvestNavigationService: FinvestNavigationService,
    private _fuseUtilsService: FinvestUtilsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('navigation' in changes) {
      this._changeDetectorRef.markForCheck();
    }
  }

  ngOnInit(): void {
    // Make sure the name input is not an empty string
    if (this.name === '') {
      this.name = this._fuseUtilsService.randomId();
    }
    // Register the navigation component
    this._finvestNavigationService.registerComponent(this.name, this);
  }

  ngOnDestroy(): void {
    // Deregister the navigation component from the registry
    this._finvestNavigationService.deregisterComponent(this.name);

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }




  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
