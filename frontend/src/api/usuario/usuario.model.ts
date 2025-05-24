import type { EnumPerfil } from "../enums.api"

export type Usuario = {
    id?: number
    nombre: string
    email: string
    clave: string
    perfil: EnumPerfil
    activo: boolean
    // ventas: Venta[]
}