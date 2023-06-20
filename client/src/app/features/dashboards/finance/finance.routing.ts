import { Route } from '@angular/router';
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
