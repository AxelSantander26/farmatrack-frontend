import { UsuarioI } from './usuario';
import { ProveedorI } from './proveedor';
import { DetalleCompraI } from './detalleCompra';

export interface CompraI {
    id?: number;
    fecha?: string; // ISO datetime string
    proveedor?: ProveedorI;
    usuario?: UsuarioI;
    total: number;
    detalles?: DetalleCompraI[];
}
