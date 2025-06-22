import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box
} from '@mui/material';
import { useForm } from 'react-hook-form';
import type { Proveedor, ProveedorFormData } from '../../../api/proveedores/proveedores.models';

interface SupplierModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: ProveedorFormData) => Promise<void>;
  supplier?: Proveedor | null;
  title: string;
}

export const SupplierModal: React.FC<SupplierModalProps> = ({
  open,
  onClose,
  onSave,
  supplier,
  title
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProveedorFormData>({
    defaultValues: supplier || { nombre: '', direccion: '', telefono: 0 }
  });

  React.useEffect(() => {
    if (supplier) {
      reset(supplier);
    } else {
      reset({ nombre: '', direccion: '', telefono: 0 });
    }
  }, [supplier, reset]);

  const onSubmit = async (data: ProveedorFormData) => {
      const transformedData = {
    ...data,
    telefono: Number(data.telefono)
  };
    await onSave(transformedData);
    onClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              fullWidth
              label="Nombre del Proveedor"
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
              {...register('nombre', {
                required: 'El nombre es obligatorio',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
              })}
            />
            <TextField
              fullWidth
              label="Dirección"
              multiline
              rows={3}
              error={!!errors.direccion}
              helperText={errors.direccion?.message}
              {...register('direccion', {
                required: 'La dirección es obligatoria'
              })}
            />
            <TextField
              fullWidth
              label="Teléfono"
              type="tel" 
              error={!!errors.telefono}
              helperText={errors.telefono?.message}
              {...register('telefono', {
                required: 'El teléfono es obligatorio',
                pattern: { 
                  value: /^\d{7,15}$/,
                  message: 'Teléfono debe tener entre 7 y 15 dígitos'
                }
              })}
            />
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
  );
};