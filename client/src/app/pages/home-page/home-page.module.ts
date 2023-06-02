import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from '@features/layouts/layouts.module'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
