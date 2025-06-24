import type { Medicamento } from './medicamento.api.model';
import { axiosInstance } from '../axiosInstace';

export const buscarMedicamentos = async (params: {
    nombre?: string;
    principioActivo?: string;
    laboratorio?: string;
}): Promise<Medicamento[]> => {
    const response = await axiosInstance.get<Medicamento[]>('/medicamentos/buscar', {
        params,
    });
    return response.data;
};
