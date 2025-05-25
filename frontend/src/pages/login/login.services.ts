import { apiGetUser } from "../../api/usuario/usuario.api";
import { handleApiError, handleApiSuccess } from "../../services/apiResponse/apiResponse.mapper";
import type { ApiResponse } from "../../services/apiResponse/apiResponse.model";

export const loginUser = async (email: string, pass: string): Promise<ApiResponse> => {
    try {
        const res = await apiGetUser(email, pass);
        return handleApiSuccess(res);
    } catch (error) {
        return handleApiError(error);
    }
};
