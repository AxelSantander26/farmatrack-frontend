export interface MedicamentoI {
    id?: number;
    nombre: string;
    principioActivo?: string;
    laboratorio?: string;
    precio: number;
    stock: number;
    stockMinimo: number;
    fechaVencimiento?: string;
    requiereReceta: boolean;
}
