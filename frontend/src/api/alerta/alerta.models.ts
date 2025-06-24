import type { Medicamento } from "../medicamento/medicamento.api.model";

export interface Alerta {
    id: number;
    medicamentoId: number;
    mensaje: string;
    fecha: string; // ISO string
    medicamento?: Medicamento;
}