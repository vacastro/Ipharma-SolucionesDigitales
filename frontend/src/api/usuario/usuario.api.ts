import { axiosInstance } from "../axiosInstace";
import type { Usuario } from "./usuario.model";

export const apiCreateUser = async (userData: Usuario): Promise<Usuario> => {
    const res = await axiosInstance.post('/auth/register', userData);
    return res.data;
};

export const apiGetUser = async (email: string, password: string): Promise<Usuario> => {
    const res = await axiosInstance.post(`/auth/login`, { email, password });
    return res.data;
};