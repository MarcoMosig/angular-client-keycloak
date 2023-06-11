import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule} from '@angular/router';
import {ModernLayoutModule} from "./layouts/horizontal/modern/modern.module";

const layoutModules = [
  ModernLayoutModule
]


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...layoutModules
  ],
  exports: [LayoutComponent, ...layoutModules],
})
export class LayoutModule {
}
