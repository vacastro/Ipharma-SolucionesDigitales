import { axiosInstance } from '../axiosInstace';
import type { PostVenta, Venta } from './venta.models';

export const apiPostVenta = async (venta: PostVenta): Promise<Venta> => {
    const response = await axiosInstance.post('/ventas/medicamento', venta);
    return response.data;
};