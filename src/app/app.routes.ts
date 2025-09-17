import { Routes } from '@angular/router';
import { PublicLayout } from './shared/layouts/public-layout/public-layout';
import { Login } from './auth/login/login';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayout,
        children: [
            { path: 'login', component: Login },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ],
    },
    {
        path: '',
        loadComponent: () =>
            import('./shared/layouts/private-layout/private-layout').then(c => c.PrivateLayout),
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/private/routes/private-routes').then(m => m.privateRoutes),
            },
        ],
    },
    { path: '**', redirectTo: 'login' },
];
