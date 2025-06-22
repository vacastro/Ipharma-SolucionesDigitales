import { axiosInstance } from '../axiosInstace';
import type { Proveedor, ProveedorFormData } from './proveedores.models';

export const getProveedores = async (): Promise<Proveedor[]> => {
    const response = await axiosInstance.get('/proveedores');
    return response.data;
};

export const createProveedor = async (data: ProveedorFormData): Promise<Proveedor> => {
    const response = await axiosInstance.post('/proveedores', data);
    return response.data;
};

export const updateProveedor = async (id: number, data: ProveedorFormData): Promise<Proveedor> => {
    const response = await axiosInstance.patch(`/proveedores/${id}`, data);
    return response.data;
};

export const deleteProveedor = async (id: number): Promise<void> => {
    await axiosInstance.delete(`/proveedores/${id}`);
};