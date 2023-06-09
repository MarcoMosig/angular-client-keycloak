import { Component, OnInit } from '@angular/core';
import { Navigation } from '@core/navigation/navigation.types';
import { FinvestNavigationItem } from "@features/headers/navigation.types";


@Component({
  selector: 'layout',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {
  isScreenSmall: boolean = false;
  navigation: Navigation = { horizontal: [] };

  constructor() {

  }
  ngOnInit(): void {
    const horizontalItems: FinvestNavigationItem[] = [
      {
        id: "dashboards", title: "Dashboards", type: "basic",
        children: [
          { id: 'dashboards.project', title: 'Project', type: 'basic', icon: 'heroicons_outline:clipboard-check', link: '/dashboards/project' },
          { id: 'dashboards.analytics', title: 'Analytics', type: 'basic', icon: 'heroicons_outline:chart-pie', link: '/dashboards/analytics' },
          { id: 'dashboards.finance', title: 'Finance', type: 'basic', icon: 'heroicons_outline:cash', link: '/dashboards/finance' },
          { id: 'dashboards.crypto', title: 'Crypto', type: 'basic', icon: 'heroicons_outline:currency-dollar', link: '/dashboards/crypto' },
        ]
      }
    ]
    this.navigation.horizontal = horizontalItems;
    console.log('Navigation', this.navigation);

  }

}
