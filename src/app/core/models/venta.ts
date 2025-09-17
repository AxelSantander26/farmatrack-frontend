import { ClienteI } from './cliente';
import { UsuarioI } from './usuario';
import { DetalleVentaI } from './detalleVenta';

export type MetodoPago = 'EFECTIVO' | 'TARJETA' | 'YAPE' | 'PLIN' | 'TRANSFERENCIA';

export interface VentaI {
    id?: number;
    fecha?: string; // ISO datetime string
    cliente?: ClienteI;
    usuario?: UsuarioI;
    total: number;
    metodoPago: MetodoPago;
    comprobante?: string; // ruta archivo
    detalles?: DetalleVentaI[];
}
