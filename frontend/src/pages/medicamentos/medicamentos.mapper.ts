import type { Medicamento } from "../../api/medicamento/medicamento.api.model";

export const mapMedicamentoFromApi = (data: any): Medicamento => ({
  id: data.id,
  nombre: data.nombre,
  principioActivo: data.principioActivo,
  laboratorio: data.laboratorio,
  proveedorId: data.proveedorId,
  fechaVencimiento: data.fechaVencimiento,
  formaFarmaceutica: data.formaFarmaceutica,
  presentacion: data.presentacion,
  lote: data.lote,
  stock: data.stock
})