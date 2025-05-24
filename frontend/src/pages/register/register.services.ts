import { apiCreateUser } from "../../api/usuario/usuario.api";
import type { Usuario } from "../../api/usuario/usuario.model";

export const registerUser = async (userData: Usuario): Promise<boolean> => {
    try {
        const res = await apiCreateUser(userData);
        return !!res;
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        return false;
    }
};
