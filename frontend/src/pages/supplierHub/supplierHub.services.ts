import { getProveedores, createProveedor, updateProveedor, deleteProveedor } from '../../api/proveedores/proveedores.api';
import type { Proveedor, ProveedorFormData } from '../../api/proveedores/proveedores.models';

export const fetchProveedores = async (): Promise<Proveedor[]> => {
    try {
        return await getProveedores();
    } catch (error) {
        console.error('Error fetching proveedores:', error);
        throw error;
    }
};

export const saveProveedor = async (data: ProveedorFormData): Promise<Proveedor> => {
    try {
        return await createProveedor(data);
    } catch (error) {
        console.error('Error creating proveedor:', error);
        throw error;
    }
};

export const editProveedor = async (id: number, data: ProveedorFormData): Promise<Proveedor> => {
    try {
        return await updateProveedor(id, data);
    } catch (error) {
        console.error('Error updating proveedor:', error);
        throw error;
    }
};

export const removeProveedor = async (id: number): Promise<void> => {
    try {
        await deleteProveedor(id);
    } catch (error) {
        console.error('Error deleting proveedor:', error);
        throw error;
    }
};