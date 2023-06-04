import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "@core/services/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isAuthenticated$: Observable<boolean>;
  isDoneLoading$: Observable<boolean>;
  canActivateProtectedRoutes$: Observable<boolean>;

  constructor(private authService: AuthService,) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.isDoneLoading$ = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes$ = this.authService.canActivateProtectedRoutes$;

  }

  get hasValidToken() {
    return this.authService.hasValidToken();
  }

  get accessToken() {
    return this.authService.accessToken;
  }

  get refreshToken() {
    return this.authService.refreshToken;
  }

  get identityClaims() {
    return this.authService.identityClaims;
  }

  get idToken() {
    return this.authService.idToken;
  }

}
