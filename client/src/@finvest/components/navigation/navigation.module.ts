import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinvestHorizontalNavigationBasicItemComponent } from '@finvest/components/navigation/horizontal/components/basic/basic.component';
import { FinvestHorizontalNavigationBranchItemComponent } from '@finvest/components/navigation/horizontal/components/branch/branch.component';
import { FinvestHorizontalNavigationDividerItemComponent } from '@finvest/components/navigation/horizontal/components/divider/divider.component';
// import { FuseHorizontalNavigationSpacerItemComponent } from '@fuse/components/navigation/horizontal/components/spacer/spacer.component';
import { FinvestHorizontalNavigationComponent } from '@finvest/components/navigation/horizontal/horizontal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FinvestScrollbarModule } from '@finvest/directives/scrollbar/';

@NgModule({
  declarations: [
    FinvestHorizontalNavigationBasicItemComponent,
    FinvestHorizontalNavigationBranchItemComponent,
    FinvestHorizontalNavigationDividerItemComponent,
    // FuseHorizontalNavigationSpacerItemComponent,
    FinvestHorizontalNavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    FinvestScrollbarModule
  ],
  exports: [
    FinvestHorizontalNavigationComponent,
  ]
})
export class FinvestNavigationModule {
}
