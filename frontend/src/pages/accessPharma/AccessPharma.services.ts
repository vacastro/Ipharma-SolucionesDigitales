import {
  apiCreateUserAdmin,
  deleteUsuario,
  getUsuarios,
  updateUsuario,
} from '../../api/usuario/usuario-private.api'
import type { Usuario, UsuarioFormData } from '../../api/usuario/usuario.model'

export const fetchUsuarios = async (): Promise<Usuario[]> => {
  try {
    return await getUsuarios()
  } catch (error) {
    console.error('Error fetching usuarios:', error)
    throw error
  }
}

export const saveUsuario = async (data: UsuarioFormData): Promise<Usuario> => {
  try {
    return await apiCreateUserAdmin(data)
  } catch (error) {
    console.error('Error creando usuario:', error)
    throw error
  }
}

export const editUsuario = async (
  id: number,
  data: UsuarioFormData
): Promise<Usuario> => {
  try {
    return await updateUsuario(id, data)
  } catch (error) {
    console.error('Error updating usuario:', error)
    throw error
  }
}

export const removeUsuario = async (id: number): Promise<void> => {
  try {
    await deleteUsuario(id)
  } catch (error) {
    console.error('Error deleting usuario:', error)
    throw error
  }
}
