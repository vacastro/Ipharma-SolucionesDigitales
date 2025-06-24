/* import { axiosInstance } from '../../api/axiosInstace';
import { Medicamento } from '../../api/medicamento/medicamento.api.model';

interface MedicamentoCreateParams {
    nombre: string;
    principioActivo: string;
    laboratorio: string;
    proveedorId: string;
    fechaVencimiento: string;
    formaFarmaceutica: string;
    presentacion: string;
    lote: string;
    stock: number;
}

// Función para crear un medicamento
export const crearMedicamento = async (medicamento: MedicamentoCreateParams): Promise<Medicamento> => {
    try {
        const response = await axiosInstance.post('/medicamentos', medicamento);
        return mapMedicamentoFromApi(response.data); // Mapea la respuesta de la API
    } catch (error) {
        console.error('Error al crear medicamento:', error);
        throw error;
    }
};
 */