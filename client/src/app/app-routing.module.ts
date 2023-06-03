import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShouldLoginComponent } from './should-login.component';
import { LayoutAdminComponent } from '@features/layouts/layout-admin/layout-admin.component';
import { LayoutMainComponent } from '@features/layouts/layout-main/layout-main.component';
import { AuthGuard } from '@core/guards/auth-guard.service';


const routes: Routes = [
    {
        path: '',
        component: LayoutMainComponent,
        loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'stocks',
        component: LayoutAdminComponent,
        // canMatch: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/stocks/stocks.module').then((m) => m.StocksModule),
            }
        ]
    },
    { path: 'should-login', component: ShouldLoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }