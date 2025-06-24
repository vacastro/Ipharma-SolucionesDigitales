import { axiosInstance } from '../axiosInstace'
import type { Usuario, UsuarioFormData } from './usuario.model'

export const apiCreateUserAdmin = async (
  userData: Usuario
): Promise<Usuario> => {
  const res = await axiosInstance.post('/users', userData)
  return res.data
}

export const updateUsuario = async (
  id: number,
  data: UsuarioFormData
): Promise<Usuario> => {
  const response = await axiosInstance.put(`/users/${id}`, data)
  return response.data
}

export const deleteUsuario = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`)
}

export const getUsuarios = async (): Promise<Usuario[]> => {
  const response = await axiosInstance.get('/users')
  return response.data
}
