import { Routes } from '@angular/router';

// Dashboard
import { Inicio } from '../dashboard/inicio/inicio';

// Clientes
import { ClientesInicio } from '../clientes/clientes-inicio/clientes-inicio';
import { ClientesList } from '../clientes/clientes-list/clientes-list';
import { ClientesForm } from '../clientes/clientes-form/clientes-form';

// Productos
import { ProductosInicio } from '../productos/productos-inicio/productos-inicio';
import { ProductosList } from '../productos/productos-list/productos-list';
import { ProductosForm } from '../productos/productos-form/productos-form';

// Proveedores
import { ProveedoresInicio } from '../proveedores/proveedores-inicio/proveedores-inicio';
import { ProveedoresList } from '../proveedores/proveedores-list/proveedores-list';
import { ProveedoresForm } from '../proveedores/proveedores-form/proveedores-form';

// Usuarios
import { UsuariosInicio } from '../usuarios/usuarios-inicio/usuarios-inicio';
import { UsuariosList } from '../usuarios/usuarios-list/usuarios-list';
import { UsuariosForm } from '../usuarios/usuarios-form/usuarios-form';

// Ventas
import { VentasInicio } from '../ventas/ventas-inicio/ventas-inicio';
import { VentasList } from '../ventas/ventas-list/ventas-list';
import { VentasForm } from '../ventas/ventas-form/ventas-form';

export const privateRoutes: Routes = [
    { path: 'dashboard', component: Inicio },

    {
        path: 'clientes',
        component: ClientesInicio,
        children: [
            { path: '', component: ClientesList },
            { path: 'form', component: ClientesForm },
            { path: 'form/:id', component: ClientesForm }, // opcional editar
        ],
    },
    {
        path: 'productos',
        component: ProductosInicio,
        children: [
            { path: '', component: ProductosList },
            { path: 'form', component: ProductosForm },
            { path: 'form/:id', component: ProductosForm },
        ],
    },
    {
        path: 'proveedores',
        component: ProveedoresInicio,
        children: [
            { path: '', component: ProveedoresList },
            { path: 'form', component: ProveedoresForm },
            { path: 'form/:id', component: ProveedoresForm },
        ],
    },
    {
        path: 'usuarios',
        component: UsuariosInicio,
        children: [
            { path: '', component: UsuariosList },
            { path: 'form', component: UsuariosForm },
            { path: 'form/:id', component: UsuariosForm },
        ],
    },
    {
        path: 'ventas',
        component: VentasInicio,
        children: [
            { path: '', component: VentasList },
            { path: 'form', component: VentasForm },
            { path: 'form/:id', component: VentasForm },
        ],
    },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
