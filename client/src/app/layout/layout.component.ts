import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Layout} from "./layout.types";
import {Subject} from "rxjs";


@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
  layout: Layout = 'modern';
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor() {

  }
  ngOnInit(): void {
    // const horizontalItems: FinvestNavigationItem[] = [
    //   {
    //     id: "dashboards", title: "Dashboards", type: "basic",
    //     children: [
    //       { id: 'dashboards.project', title: 'Project', type: 'basic', icon: 'heroicons_outline:clipboard-check', link: '/dashboards/project' },
    //       { id: 'dashboards.analytics', title: 'Analytics', type: 'basic', icon: 'heroicons_outline:chart-pie', link: '/dashboards/analytics' },
    //       { id: 'dashboards.finance', title: 'Finance', type: 'basic', icon: 'heroicons_outline:cash', link: '/dashboards/finance' },
    //       { id: 'dashboards.crypto', title: 'Crypto', type: 'basic', icon: 'heroicons_outline:currency-dollar', link: '/dashboards/crypto' },
    //     ]
    //   }
    // ]
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
