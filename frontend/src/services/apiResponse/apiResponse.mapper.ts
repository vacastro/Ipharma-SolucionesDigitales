import type { ApiResponse } from "./apiResponse.model";

export const handleApiSuccess = <T>(data: T): ApiResponse<T> => {
    return {
        success: true,
        data,
        statusCode: 200
    };
};

export const handleApiError = (error: any): ApiResponse => {
    // Extrae información del error según la estructura de tu backend
    const statusCode = error.response?.status || 500;
    const message = error.response?.data?.message ||
        error.message ||
        'Error en la operación';

    return {
        success: false,
        message,
        statusCode
    };
};