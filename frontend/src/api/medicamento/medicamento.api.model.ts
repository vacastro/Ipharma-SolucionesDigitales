export interface Medicamento {
  id: number;
  nombre: string;
  principioActivo: string;
  laboratorio: string;
  proveedorId: number;
  fechaVencimiento: string;
  formaFarmaceutica: string;
  presentacion: string;
  lote: string;
  stock: number;
}