import { Routes } from "@angular/router";

export const PORTFOLIO_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./portfolio-layout/portfolio-layout.component').then(c => c.PortfolioLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
            }
        ]
    }
];