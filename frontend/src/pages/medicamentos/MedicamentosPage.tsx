// src/pages/medicamentos/MedicamentosPage.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { IconButton, Box, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getMedicamentos } from './medicamentos.service';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';

export const MedicamentosPage: React.FC = () => {
  const [data, setData] = useState<Medicamento[]>([]);

  useEffect(() => {
    getMedicamentos().then(setData);
  }, []);

  const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Producto', flex: 1 },
    { field: 'laboratorio', headerName: 'Laboratorio', flex: 1 },
    { field: 'formaFarmaceutica', headerName: 'Forma Farmacéutica', flex: 1 },
    { field: 'presentacion', headerName: 'Presentación', flex: 1 },
    { field: 'existencia', headerName: 'Existencia', flex: 0.5 },
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
      <Typography variant="h5" gutterBottom>
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
