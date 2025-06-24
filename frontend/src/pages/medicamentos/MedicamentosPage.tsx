// src/pages/medicamentos/MedicamentosPage.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { IconButton, Box, Typography, TextField, Button, Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { buscarMedicamentosApi, getMedicamentos } from './medicamentos.service';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';

export const MedicamentosPage: React.FC = () => {
  const [data, setData] = useState<Medicamento[]>([]);
  const [nombreBusqueda, setNombreBusqueda] = useState('');
  const [principioActivoBusqueda, setPrincipioActivoBusqueda] = useState('');
  const [laboratorioBusqueda, setLaboratorioBusqueda] = useState('');

  useEffect(() => {
    getMedicamentos().then(setData);
  }, []);

  const buscarMedicamentos = async () => {
    try {
      const medicamentosEncontrados = await buscarMedicamentosApi(
        nombreBusqueda,
        principioActivoBusqueda,
        laboratorioBusqueda
      );
      setData(medicamentosEncontrados);
    } catch (error) {
      console.error('Error al buscar medicamentos:', error);
    }
  };

  const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Producto', flex: 1 },
    { field: 'laboratorio', headerName: 'Laboratorio', flex: 1 },
    { field: 'formaFarmaceutica', headerName: 'Forma Farmacéutica', flex: 1 },
    { field: 'presentacion', headerName: 'Presentación', flex: 1 },
    { field: 'stock', headerName: 'Existencia', flex: 0.5 },
    {
      field: 'acciones',
      headerName: 'Acciones',
      sortable: false,
      filterable: false,
      flex: 0.7,
      renderCell: () => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton aria-label="agregar" size="small">
            <AddCircleOutlineIcon color="primary" />
          </IconButton>
          <IconButton aria-label="editar" size="small">
            <EditIcon color="action" />
          </IconButton>
          <IconButton aria-label="eliminar" size="small">
            <DeleteIcon color="action" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Buscar Medicamentos
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Buscar por producto"
              value={nombreBusqueda}
              onChange={(e) => setNombreBusqueda(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Buscar por principio activo"
              value={principioActivoBusqueda}
              onChange={(e) => setPrincipioActivoBusqueda(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Buscar por laboratorio"
              value={laboratorioBusqueda}
              onChange={(e) => setLaboratorioBusqueda(e.target.value)}
            />
          </Grid>
        </Grid>
        <Box sx={{ my: 3 }}>
            <Button
            type="submit"
            variant="contained"
            sx={{ mb: 2, bgcolor: '#00447e', '&:hover': { bgcolor: '#00376a' } }}
            onClick={buscarMedicamentos}
            >
              Buscar
            </Button>
        </Box>
      </Box>

      <Typography variant="h4" gutterBottom>
        Listado de Medicamentos
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id} // Asegurate que el objeto tenga `id`
        disableColumnMenu
        sx={{
          borderRadius: 2,
          bgcolor: '#fff',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#0e5882',
            color: '#155fa0',
            fontWeight: 'bold',
          },
        }}
      />
    </Box>
  );
};

export default MedicamentosPage;
