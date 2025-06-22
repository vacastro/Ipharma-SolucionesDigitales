// src/pages/medicamentos/MedicamentosPage.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { IconButton, Box, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getMedicamentos } from './medicamentos.service';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
import { AddBox, Event, Help, History, Inventory, Search, Warning } from '@mui/icons-material';
import { useSidebar } from '../../shared/sidebar/hooks/useSidebar';

export const MedicamentosPage: React.FC = () => {
  const [data, setData] = useState<Medicamento[]>([]);
  const { setSidebarItems } = useSidebar();

  // Definir las opciones del sidebar para medicamentos
  useEffect(() => {
    setSidebarItems([
      { 
        text: 'Búsqueda', 
        icon: <Search />,
        onClick: () => console.log('Búsqueda de medicamentos clicked')
      },
      { 
        text: 'Ingresar Medicamento', 
        icon: <AddBox />,
        onClick: () => console.log('Ingresar Medicamento clicked')
      },
      { 
        text: 'Control de Vencimientos', 
        icon: <Event />,
        onClick: () => console.log('Control de Vencimientos clicked')
      },
      { 
        text: 'Gestión de Lotes', 
        icon: <Inventory />,
        onClick: () => console.log('Gestión de Lotes clicked')
      },
      { 
        text: 'Historial de cambios', 
        icon: <History />,
        onClick: () => console.log('Historial de cambios clicked')
      },
      { 
        text: 'Inventario Físico', 
        icon: <Inventory />,
        onClick: () => console.log('Inventario Físico clicked')
      },
      { 
        text: 'Alertas de Stock', 
        icon: <Warning />,
        onClick: () => console.log('Alertas de Stock clicked')
      },
      { 
        text: 'Tutoriales', 
        icon: <Help />,
        onClick: () => console.log('Tutoriales clicked')
      },
    ]);
  }, []);

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
