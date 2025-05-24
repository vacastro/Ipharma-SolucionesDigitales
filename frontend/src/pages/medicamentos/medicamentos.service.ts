import { axiosInstance } from '../../api/axiosInstace';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
import { mapMedicamentoFromApi } from './medicamentos.mapper';

export const getMedicamentos = async (): Promise<Medicamento[]> => {
  const res = await axiosInstance.get('/medicamentos');
  return res.data.map(mapMedicamentoFromApi);
};