
import { CompraI } from './compra';
import { MedicamentoI } from './medicamento';

export interface DetalleCompraI {
    id?: number;
    compra?: CompraI;
    medicamento?: MedicamentoI;
    cantidad: number;
    precioUnitario: number;
}
