import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { AuthService } from 'app/core/services/auth.service';
import { FinvestNavigationItem } from '../navigation.types';

@Component({
  selector: 'fuse-horizontal-navigation',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class FinvestHorizontalNavigationComponent {

  @Input() name: string = 'horizontal';
  @Input() navigation: FinvestNavigationItem[] | undefined;
  constructor(
    private authService: AuthService,) { }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
