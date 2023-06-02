import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShouldLoginComponent } from './should-login.component';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'stocks',
        loadChildren: () =>
            import('./features/stocks/stocks.module').then((m) => m.StocksModule),
    },
    { path: 'should-login', component: ShouldLoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }