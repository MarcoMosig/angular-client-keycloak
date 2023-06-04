import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersModule } from '@features/headers/headers.module'
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeadersModule
  ],
  exports: [LayoutMainComponent],
})
export class LayoutsModule { }
