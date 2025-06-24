import React, { useState } from 'react';
import { Box, Button, TextField, Grid, Typography } from '@mui/material';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
//import { crearMedicamento } from './IngresarMedicamentos.service';

// Componente para ingresar medicamentos
const IngresarMedicamentosPage = () => {
  const [formData, setFormData] = useState<Medicamento>({
    nombre: '',
    principioActivo: '',
    laboratorio: '',
    proveedorId: '',
    fechaVencimiento: '',
    formaFarmaceutica: '',
    presentacion: '',
    lote: '',
    stock: 0,
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //await crearMedicamento(formData);
      // Resetear el formulario o redirigir a otra página
      setFormData({
        nombre: '',
        principioActivo: '',
        laboratorio: '',
        proveedorId: '',
        fechaVencimiento: '',
        formaFarmaceutica: '',
        presentacion: '',
        lote: '',
        stock: 0,
      });
      setError(''); // Limpiar errores
      alert('Medicamento ingresado con éxito!');
    } catch (err) {
      setError('Hubo un error al crear el medicamento.');
    }
  };

  return (
    <Box sx={{ padding: 0 }}>
      <Typography variant="h4" gutterBottom>
        Carga manual de medicamentos
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Campos de entrada del formulario */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Principio Activo"
              name="principioActivo"
              value={formData.principioActivo}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Laboratorio"
              name="laboratorio"
              value={formData.laboratorio}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Proveedor ID"
              name="proveedorId"
              value={formData.proveedorId}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha de Vencimiento"
              name="fechaVencimiento"
              value={formData.fechaVencimiento}
              onChange={handleChange}
              type="date"
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Forma Farmacéutica"
              name="formaFarmaceutica"
              value={formData.formaFarmaceutica}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Presentación"
              name="presentacion"
              value={formData.presentacion}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Lote"
              name="lote"
              value={formData.lote}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              fullWidth
              type="number"
              required
            />
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 3 }}>
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" 
          sx={{ mb: 2, bgcolor: '#00447e', '&:hover': { bgcolor: '#00376a' } }}
          >
            Crear
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default IngresarMedicamentosPage;
