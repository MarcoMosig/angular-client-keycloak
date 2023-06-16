import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component';
import { FinanceResolver } from './finance.resolver';

export const financeRoutes: Route[] = [
  {
    path: '',
    component: FinanceComponent,
    resolve: {
      data: FinanceResolver
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(financeRoutes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
