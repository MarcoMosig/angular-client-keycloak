import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersModule } from '@features/headers/headers.module'
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';



@NgModule({
  declarations: [
    LayoutAdminComponent,
    LayoutMainComponent
  ],
  imports: [
    CommonModule,
    HeadersModule
  ],
  exports: [LayoutAdminComponent, LayoutMainComponent],
})
export class LayoutsModule { }
