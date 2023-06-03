import { Component } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {

  isScreenSmall: boolean = false;
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
