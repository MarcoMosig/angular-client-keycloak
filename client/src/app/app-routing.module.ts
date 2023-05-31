import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShouldLoginComponent } from './should-login.component';


const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'stocks', loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule) },
    { path: 'should-login', component: ShouldLoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }