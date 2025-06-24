import { axiosInstance } from '../../api/axiosInstace';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
import { mapMedicamentoFromApi } from './medicamentos.mapper';

export const getMedicamentos = async (): Promise<Medicamento[]> => {
  const res = await axiosInstance.get('/medicamentos');
  return res.data.map(mapMedicamentoFromApi);
};


export const buscarMedicamentosApi = async (
  nombre?: string,
  principioActivo?: string,
  laboratorio?: string
): Promise<Medicamento[]> => {
  const params = new URLSearchParams();
  if (nombre) {
    params.append('nombre', nombre);
  }
  if (principioActivo) {
    params.append('principioActivo', principioActivo);
  }
  if (laboratorio) {
    params.append('laboratorio', laboratorio);
  }

  const res = await axiosInstance.get(`/medicamentos/buscar?${params.toString()}`);
  return res.data.map(mapMedicamentoFromApi);
};