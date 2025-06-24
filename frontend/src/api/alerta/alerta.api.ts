import { axiosInstance } from '../axiosInstace';
import type { Alerta } from './alerta.models';

export const getAlertas = async (): Promise<Alerta[]> => {
    const response = await axiosInstance.get('/alertas/stock');
    return response.data;
};