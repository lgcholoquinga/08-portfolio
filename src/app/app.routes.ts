import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'portfolio',
        loadChildren: () => import('./pages/portfolio/portfolio.routes').then(r => r.PORTFOLIO_ROUTES)
    },
    {
        path: '',
        redirectTo: '/portfolio',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/portfolio',
    }
];
