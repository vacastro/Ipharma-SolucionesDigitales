import { getAlertas } from "../../api/alerta/alerta.api";
import type { Alerta } from "../../api/alerta/alerta.models";

export const fetchAlertas = async (): Promise<Alerta[]> => {
    try {
        return await getAlertas();
    } catch (error) {
        console.error('Error fetching alertas:', error);
        throw error;
    }
};