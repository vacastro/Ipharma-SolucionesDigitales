/* eslint-disable prettier/prettier */
import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import type {
  Usuario,
  UsuarioFormData,
} from '../../../api/usuario/usuario.model'
import { EnumPerfil } from '../../../api/enums.api'

interface AccessPharmaModalProps {
  open: boolean
  onClose: () => void
  onSave: (data: UsuarioFormData) => Promise<void>
  usuario?: Usuario | null
  title: string
}

export const AccessPharmaModal: React.FC<AccessPharmaModalProps> = ({
  open,
  onClose,
  onSave,
  usuario,
  title,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UsuarioFormData>({
    defaultValues: usuario || {
      nombre: '',
      email: '',
      clave: '',
      perfil: EnumPerfil.administrativo,
      activo: true,
    },
  })

  React.useEffect(() => {
    if (usuario) {
      reset(usuario)
    } else {
      reset({
        nombre: '',
        email: '',
        clave: '',
        perfil: EnumPerfil.administrativo,
        activo: true,
      })
    }
  }, [usuario, reset])

  const onSubmit = async (data: UsuarioFormData) => {
    const transformedData = {
      ...data,
    }
    await onSave(transformedData)
    onClose()
    reset()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              fullWidth
              label="Nombre"
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
              {...register('nombre', {
                required: 'El nombre es obligatorio',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
              })}
            />
            <TextField
              fullWidth
              label="Email"
              multiline
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register('email', {
                required: 'Email obligatorio',
              })}
            />
            <TextField
              fullWidth
              label="Clave"
              type="clave"
              error={!!errors.clave}
              helperText={errors.clave?.message}
              {...register('clave', {
                required: 'clave obligatoria',
                pattern: {
                value: /^\d{5,10}$/,
                message: 'La clave debe tener entre 5 y 10 dígitos',
                },
              })}
            />
              {/* <TextField
              fullWidth
              label="Perfil"
              multiline
              error={!!errors.perfil}
              helperText={errors.perfil?.message}
              {...register('perfil', {
                required: ' "farmaceutico" o "administrativo"',
              })}
            /> */}
            <Select
              labelId="perfil-label"
              id="perfil"
              label="Perfil"
              defaultValue=""
              {...register('perfil', {
               required: 'Perfil es requerido',
               })}
            >
              <MenuItem value="farmaceutico">Farmaceutico</MenuItem>
              <MenuItem value="administrativo">Administrativo</MenuItem>
            </Select>
             <Select
              label="Estado"
              defaultValue=""
              {...register('activo', {
              required: 'requerido',
              })}
            >
              <MenuItem value="true">Activo</MenuItem>
              <MenuItem value="false">Inactivo</MenuItem>
            </Select>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
