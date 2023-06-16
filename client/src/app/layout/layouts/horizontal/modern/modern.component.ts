import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'app/core/services/auth.service';
import { Navigation } from "app/core/navigation/navigation.types";
import { FinvestNavigationService } from "@finvest/components/navigation";
import { NavigationService } from 'app/core/navigation/navigation.service';

@Component({
  selector: 'modern-layout',
  templateUrl: './modern.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ModernLayoutComponent implements OnInit, OnDestroy {
  isScreenSmall: boolean = false;
  navigation?: Navigation;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _navigationService: NavigationService,
    private _finvestNavigationService: FinvestNavigationService,) {
  }

  ngOnInit() {
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: Navigation) => {
        this.navigation = navigation;
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  toggleNavigation(name: string): void {
    // Get the navigation
    //const navigation = this._finvestNavigationService.getComponent<FinvestVerticalNavigationComponent>(name);

    // if (navigation) {
    //   // Toggle the opened status
    //   navigation.toggle();
    // }
  }
}
