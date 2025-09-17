import { MedicamentoI } from './medicamento';
import { VentaI } from './venta';

export interface DetalleVentaI {
    id?: number;
    venta?: VentaI;
    medicamento?: MedicamentoI;
    cantidad: number;
    precioUnitario: number;
}
