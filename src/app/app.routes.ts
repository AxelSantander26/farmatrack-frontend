import { Routes } from '@angular/router';
import { PublicLayout } from './shared/layouts/public-layout/public-layout';
import { PrivateLayout } from './shared/layouts/private-layout/private-layout';
import { Login } from './auth/login/login';

// Dashboard
import { Inicio } from './features/private/dashboard/inicio/inicio';

// Clientes
import { ClientesInicio } from './features/private/clientes/clientes-inicio/clientes-inicio';
import { ClientesList } from './features/private/clientes/clientes-list/clientes-list';
import { ClientesForm } from './features/private/clientes/clientes-form/clientes-form';

// Productos
import { ProductosInicio } from './features/private/productos/productos-inicio/productos-inicio';
import { ProductosList } from './features/private/productos/productos-list/productos-list';
import { ProductosForm } from './features/private/productos/productos-form/productos-form';

// Proveedores
import { ProveedoresInicio } from './features/private/proveedores/proveedores-inicio/proveedores-inicio';
import { ProveedoresList } from './features/private/proveedores/proveedores-list/proveedores-list';
import { ProveedoresForm } from './features/private/proveedores/proveedores-form/proveedores-form';

// Usuarios
import { UsuariosInicio } from './features/private/usuarios/usuarios-inicio/usuarios-inicio';
import { UsuariosList } from './features/private/usuarios/usuarios-list/usuarios-list';
import { UsuariosForm } from './features/private/usuarios/usuarios-form/usuarios-form';

// Ventas
import { VentasInicio } from './features/private/ventas/ventas-inicio/ventas-inicio';
import { VentasList } from './features/private/ventas/ventas-list/ventas-list';
import { VentasForm } from './features/private/ventas/ventas-form/ventas-form';

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
        component: PrivateLayout,
        children: [
            // Dashboard
            { path: 'dashboard', component: Inicio },

            // Clientes
            {
                path: 'clientes',
                component: ClientesInicio,
                children: [
                    { path: '', component: ClientesList },
                    { path: 'form', component: ClientesForm },
                ],
            },

            // Productos
            {
                path: 'productos',
                component: ProductosInicio,
                children: [
                    { path: '', component: ProductosList },
                    { path: 'form', component: ProductosForm },
                ],
            },

            // Proveedores
            {
                path: 'proveedores',
                component: ProveedoresInicio,
                children: [
                    { path: '', component: ProveedoresList },
                    { path: 'form', component: ProveedoresForm },
                ],
            },

            // Usuarios
            {
                path: 'usuarios',
                component: UsuariosInicio,
                children: [
                    { path: '', component: UsuariosList },
                    { path: 'form', component: UsuariosForm },
                ],
            },

            // Ventas
            {
                path: 'ventas',
                component: VentasInicio,
                children: [
                    { path: '', component: VentasList },
                    { path: 'form', component: VentasForm },
                ],
            },

            // Redirección default
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: 'login' },
];
