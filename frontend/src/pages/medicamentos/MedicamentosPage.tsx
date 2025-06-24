import React, { useEffect, useState } from 'react';
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from '@mui/x-data-grid';
import {
  IconButton,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { getMedicamentos } from './medicamentos.service';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
import { AddBox, Event, Help, History, Inventory, Search, Warning } from '@mui/icons-material';
import { useSidebar } from '../../shared/sidebar/hooks/useSidebar';

export const MedicamentosPage: React.FC = () => {
  const [data, setData] = useState<Medicamento[]>([]);
  const [detalleAbierto, setDetalleAbierto] = useState(false);
  const [editarAbierto, setEditarAbierto] = useState(false);
  const [medicamentoSeleccionado, setMedicamentoSeleccionado] = useState<Medicamento | null>(null);
  const [form, setForm] = useState<any>({});

  const cargarDatos = async () => {
    const res = await getMedicamentos();
    setData(res);
  };

  const { setSidebarItems } = useSidebar();

  // Definir las opciones del sidebar para medicamentos
  useEffect(() => {
    // Cargar datos al montar el componente
    cargarDatos();

    // Definir las opciones del sidebar para medicamentos
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
  }, [setSidebarItems]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const abrirDetalle = (medicamento: Medicamento) => {
    setMedicamentoSeleccionado(medicamento);
    setDetalleAbierto(true);
  };

  const cerrarDetalle = () => {
    setDetalleAbierto(false);
    setMedicamentoSeleccionado(null);
  };

  const abrirEditar = (medicamento: Medicamento) => {
    setMedicamentoSeleccionado(medicamento);
    setForm({ ...medicamento });
    setEditarAbierto(true);
  };

  const cerrarEditar = () => {
    setEditarAbierto(false);
    setMedicamentoSeleccionado(null);
    setForm({});
  };

  const handleEditarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardarEdicion = async () => {
    if (!medicamentoSeleccionado) return;
    try {
      await axios.patch(`http://localhost:5000/api/medicamentos/${medicamentoSeleccionado.id}`, {
        nombre: form.nombre,
        principioActivo: form.principioActivo,
        laboratorio: form.laboratorio,
        proveedorId: form.proveedorId,
        fechaVencimiento: form.fechaVencimiento,
        formaFarmaceutica: form.formaFarmaceutica,
        presentacion: form.presentacion,
        lote: form.lote,
        stock: parseInt(form.stock),
      });
      await cargarDatos();
      cerrarEditar();
    } catch (error) {
      console.error('Error al editar medicamento:', error);
      alert('Ocurrió un error al editar el medicamento');
    }
  };

  const eliminarMedicamento = async (id: number) => {
    if (!confirm('¿Estás seguro que querés eliminar este medicamento?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/medicamentos/${id}`);
      await cargarDatos();
    } catch (error) {
      console.error('Error al eliminar medicamento:', error);
      alert('No se pudo eliminar el medicamento.');
    }
  };

  const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Producto', flex: 1, headerClassName: 'encabezado' },
    { field: 'laboratorio', headerName: 'Laboratorio', flex: 1, headerClassName: 'encabezado' },
    { field: 'formaFarmaceutica', headerName: 'Forma Farmacéutica', flex: 1, headerClassName: 'encabezado' },
    { field: 'presentacion', headerName: 'Presentación', flex: 1, headerClassName: 'encabezado' },
    { field: 'stock', headerName: 'Existencia', flex: 0.5, headerClassName: 'encabezado' },
    {
      field: 'acciones',
      headerName: 'Acciones',
      sortable: false,
      filterable: false,
      flex: 0.7,
      headerClassName: 'encabezado',
      renderCell: (params: GridRenderCellParams) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            aria-label="detalle"
            size="small"
            onClick={() => abrirDetalle(params.row)}
          >
            <AddCircleOutlineIcon color="primary" />
          </IconButton>
          <IconButton
            aria-label="editar"
            size="small"
            onClick={() => abrirEditar(params.row)}
          >
            <EditIcon color="action" />
          </IconButton>
          <IconButton
            aria-label="eliminar"
            size="small"
            onClick={() => eliminarMedicamento(params.row.id)}
          >
            <DeleteIcon color="action" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        Listado de Medicamentos
      </Typography>

      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        disableColumnMenu
        sx={{
          borderRadius: 2,
          bgcolor: '#fff',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#0e5882',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            minHeight: 50,
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          }
        }}
      />

      {/* Diálogo Detalle */}
      <Dialog open={detalleAbierto} onClose={cerrarDetalle} fullWidth>
        <DialogTitle>Detalle del Medicamento</DialogTitle>
        <DialogContent dividers>
          {medicamentoSeleccionado && (
            <List>
              <ListItem><ListItemText primary="Nombre" secondary={medicamentoSeleccionado.nombre} /></ListItem>
              <ListItem><ListItemText primary="Principio Activo" secondary={medicamentoSeleccionado.principioActivo} /></ListItem>
              <ListItem><ListItemText primary="Laboratorio" secondary={medicamentoSeleccionado.laboratorio} /></ListItem>
              <ListItem><ListItemText primary="Forma Farmacéutica" secondary={medicamentoSeleccionado.formaFarmaceutica} /></ListItem>
              <ListItem><ListItemText primary="Presentación" secondary={medicamentoSeleccionado.presentacion} /></ListItem>
              <ListItem><ListItemText primary="Lote" secondary={medicamentoSeleccionado.lote} /></ListItem>
              <ListItem><ListItemText primary="Stock" secondary={medicamentoSeleccionado.stock} /></ListItem>
              <ListItem><ListItemText primary="Vencimiento" secondary={new Date(medicamentoSeleccionado.fechaVencimiento).toLocaleDateString('es-AR')} /></ListItem>
              {medicamentoSeleccionado.proveedor && (
                <ListItem><ListItemText primary="Proveedor" secondary={medicamentoSeleccionado.proveedor.nombre} /></ListItem>
              )}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={cerrarDetalle} color="primary">Cerrar</Button>
        </DialogActions>
      </Dialog>

      {/* Diálogo Edición */}
      <Dialog open={editarAbierto} onClose={cerrarEditar} fullWidth>
        <DialogTitle>Editar Medicamento</DialogTitle>
        <DialogContent dividers>
          {medicamentoSeleccionado && (
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Nombre" name="nombre" value={form.nombre || ''} onChange={handleEditarChange} />
              <TextField label="Principio Activo" name="principioActivo" value={form.principioActivo || ''} onChange={handleEditarChange} />
              <TextField label="Laboratorio" name="laboratorio" value={form.laboratorio || ''} onChange={handleEditarChange} />
              <TextField label="Forma Farmacéutica" name="formaFarmaceutica" value={form.formaFarmaceutica || ''} onChange={handleEditarChange} />
              <TextField label="Presentación" name="presentacion" value={form.presentacion || ''} onChange={handleEditarChange} />
              <TextField label="Lote" name="lote" value={form.lote || ''} onChange={handleEditarChange} />
              <TextField label="Stock" name="stock" type="number" value={form.stock || ''} onChange={handleEditarChange} />
              <TextField label="Fecha de Vencimiento" name="fechaVencimiento" type="date" InputLabelProps={{ shrink: true }} value={form.fechaVencimiento?.slice(0, 10) || ''} onChange={handleEditarChange} />
              <TextField label="Proveedor ID" name="proveedorId" type="number" value={form.proveedorId || ''} onChange={handleEditarChange} />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={cerrarEditar}>Cancelar</Button>
          <Button onClick={guardarEdicion} variant="contained">Guardar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MedicamentosPage;