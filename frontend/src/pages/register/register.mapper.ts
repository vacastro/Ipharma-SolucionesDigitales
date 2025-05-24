import { EnumPerfil } from "../../api/enums.api";
import type { Usuario } from "../../api/usuario/usuario.model";
import type { RegisterFormInputs } from "./register.models";

export const mapFormDataToRequest = (formData: RegisterFormInputs): Usuario => {
    return {
        nombre: formData.nombre,
        email: formData.email,
        clave: formData.password,
        perfil: EnumPerfil.administrativo,
        activo: true
    };
}
