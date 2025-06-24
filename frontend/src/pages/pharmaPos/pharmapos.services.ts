import { apiPostVenta } from "../../api/venta/venta.api";
import type { PostVenta, Venta } from "../../api/venta/venta.models";
import { handleApiError, handleApiSuccess } from "../../services/apiResponse/apiResponse.mapper";
import type { ApiResponse } from "../../services/apiResponse/apiResponse.model";

export const registerVenta = async (ventaData: PostVenta): Promise<ApiResponse> => {
    try {
        const res = await apiPostVenta(ventaData);
        return handleApiSuccess(res);
    } catch (error) {
        return handleApiError(error);
    }
};
