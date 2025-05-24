export interface Medicamento {
  id: number;
  nombre: string;
  principioActivo: string;
  laboratorio: string;
  proveedorId: number;
  fechaVencimiento: Date; // ISO date
  formaFarmaceutica: string;
  presentacion: string;
  lote: string;
  stock: number;
}