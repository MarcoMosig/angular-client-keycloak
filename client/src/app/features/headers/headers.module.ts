import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { BasicComponent } from './component/basic/basic.component';



@NgModule({
  declarations: [
    HorizontalComponent,
    BasicComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HorizontalComponent]
})
export class HeadersModule { }
