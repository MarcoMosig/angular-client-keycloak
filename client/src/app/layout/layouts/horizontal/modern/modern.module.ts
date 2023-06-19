import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ModernLayoutComponent} from "./modern.component";
import { FinvestNavigationModule } from '@finvest/components/navigation';
import { SharedModule } from 'app/shared/shared.module';
import {NgOptimizedImage} from "@angular/common";
@NgModule({
  declarations: [
    ModernLayoutComponent
  ],
    imports: [
        HttpClientModule,
        RouterModule,
        FinvestNavigationModule,
        SharedModule,
        NgOptimizedImage,
    ],
  exports     : [
    ModernLayoutComponent
  ]
})
export class ModernLayoutModule
{
}
