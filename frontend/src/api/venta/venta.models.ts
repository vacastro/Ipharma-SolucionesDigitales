import type { EnumFormaPago } from '../enums.api';
import type { Usuario } from '../usuario/usuario.model';

export interface Venta {
    id: number;
    fecha: string; // ISO Date string
    clienteId: number;
    usuarioId: number;
    total: number;
    formaPago: EnumFormaPago;
    usuario?: Usuario;
}

export interface PostVenta {
    fecha: string; // Fecha de la venta en formato ISO (p. ej. new Date().toISOString())
    total: number;
    formaPago: 'efectivo' | 'tarjeta'; // Según enum FormaPago
    usuarioId: number;
    clienteNombre: string;
    clienteEmail: string;
    ventaMedicamentos: {
        medicamentoId: number;
        cantidad: number;
        precioUnitario: number;
    }[];
}
