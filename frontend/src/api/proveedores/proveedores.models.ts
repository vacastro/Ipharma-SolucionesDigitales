export interface Proveedor {
    id: number;
    nombre: string;
    direccion: string;
    telefono: number;
}

export interface ProveedorFormData {
    nombre: string;
    direccion: string;
    telefono: number;
}