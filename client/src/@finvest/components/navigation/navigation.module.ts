import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinvestHorizontalNavigationBasicItemComponent } from '@finvest/components/navigation/horizontal/components/basic/basic.component';
// import { FuseHorizontalNavigationBranchItemComponent } from '@fuse/components/navigation/horizontal/components/branch/branch.component';
// import { FuseHorizontalNavigationDividerItemComponent } from '@fuse/components/navigation/horizontal/components/divider/divider.component';
// import { FuseHorizontalNavigationSpacerItemComponent } from '@fuse/components/navigation/horizontal/components/spacer/spacer.component';
import { FinvestHorizontalNavigationComponent } from '@finvest/components/navigation/horizontal/horizontal.component';

@NgModule({
  declarations: [
    FinvestHorizontalNavigationBasicItemComponent,
    // FuseHorizontalNavigationBranchItemComponent,
    // FuseHorizontalNavigationDividerItemComponent,
    // FuseHorizontalNavigationSpacerItemComponent,
    FinvestHorizontalNavigationComponent,
  ],
  imports     : [
    CommonModule,
    RouterModule,
  ],
  exports     : [
    FinvestHorizontalNavigationComponent,
  ]
})
export class FinvestNavigationModule
{
}
