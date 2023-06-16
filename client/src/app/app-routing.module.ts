import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShouldLoginComponent } from './should-login.component';
import { LayoutComponent } from "./layout/layout.component";
import { InitialDataResolver } from './app.resolver';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {
        path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
      },
      {
        path: 'stocks',
        loadChildren: () =>
          import('./features/stocks/stocks.module').then((m) => m.StocksModule)
      },
      {
        path: 'dashboards',
        children: [
          {
            path: 'finance', loadChildren: () => import('./features/dashboards/finance/finance.module').then((m) => m.FinanceModule)
          }
        ]

      }
    ]
  },
  { path: 'should-login', component: ShouldLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
