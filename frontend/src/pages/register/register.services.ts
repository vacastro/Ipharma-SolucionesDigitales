import { apiCreateUser } from "../../api/usuario/usuario.api";
import type { Usuario } from "../../api/usuario/usuario.model";
import { handleApiError, handleApiSuccess } from "../../services/apiResponse/apiResponse.mapper";
import type { ApiResponse } from "../../services/apiResponse/apiResponse.model";

export const registerUser = async (userData: Usuario): Promise<ApiResponse> => {
    try {
        const res = await apiCreateUser(userData);
        return handleApiSuccess(res);
    } catch (error) {
        return handleApiError(error);
    }
};
