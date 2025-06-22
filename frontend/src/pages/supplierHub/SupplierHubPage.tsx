import { Business, History, PersonAdd } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import type { Proveedor, ProveedorFormData } from '../../api/proveedores/proveedores.models';
import { useNotification } from '../../shared/notifications/notifications.provider';
import { useSidebar } from '../../shared/sidebar/hooks/useSidebar';
import { theme } from '../../theme/theme';
import { SupplierModal } from './components/SupplierModal';
import { editProveedor, fetchProveedores, removeProveedor, saveProveedor } from './supplierHub.services';

export const SupplierHub: React.FC = () => {
  const [data, setData] = useState<Proveedor[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Proveedor | null>(null);
  const [supplierToDelete, setSupplierToDelete] = useState<Proveedor | null>(null);
  const { showNotification } = useNotification();
  const { setSidebarItems } = useSidebar();

  useEffect(() => {
    setSidebarItems([
      { 
        text: 'Nuevo Proveedor', 
        icon: <PersonAdd />,
        onClick: handleCreate
      },
      { 
        text: 'Devoluciones', 
        icon: <History />,
        onClick: () => console.log('Gestión clicked')
      },
      { 
        text: 'Pedidos', 
        icon: <Business />,
        onClick: () => console.log('Historial clicked')
      },
    ]);
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const proveedores = await fetchProveedores();
      setData(proveedores);
    } catch (error) {
      showNotification('Error al cargar proveedores', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = () => {
    setSelectedSupplier(null);
    setModalOpen(true);
  };

  const handleEdit = (supplier: Proveedor) => {
    setSelectedSupplier(supplier);
    setModalOpen(true);
  };

  const handleDelete = (supplier: Proveedor) => {
    setSupplierToDelete(supplier);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (supplierToDelete) {
      try {
        await removeProveedor(supplierToDelete.id);
        showNotification('Proveedor eliminado exitosamente', 'success');
        loadData();
      } catch (error) {
        showNotification('Error al eliminar proveedor', 'error');
      }
    }
    setDeleteDialogOpen(false);
    setSupplierToDelete(null);
  };

  const handleSave = async (formData: ProveedorFormData) => {
    try {
      if (selectedSupplier) {
        await editProveedor(selectedSupplier.id, formData);
        showNotification('Proveedor actualizado exitosamente', 'success');
      } else {
        await saveProveedor(formData);
        showNotification('Proveedor creado exitosamente', 'success');
      }
      loadData();
    } catch (error) {
      showNotification('Error al guardar proveedor', 'error');
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', flex: 1 },
    { field: 'direccion', headerName: 'Dirección', flex: 1.5 },
    { field: 'telefono', headerName: 'Teléfono', flex: 1 },
    {
      field: 'acciones',
      headerName: 'Acciones',
      sortable: false,
      filterable: false,
      flex: 0.7,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            aria-label="editar" 
            size="small"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon color="primary" />
          </IconButton>
          <IconButton 
            aria-label="eliminar" 
            size="small"
            onClick={() => handleDelete(params.row)}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      ),
    },
  ];


  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Gestión de Proveedores
        </Typography>
      </Box>

      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.id}
        disableColumnMenu
        sx={{
          borderRadius: 2,
          bgcolor: '#fff',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.default,
            color: '#ffffff',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#2c3e50', // Para headers individuales
          },
        }}
      />

      <SupplierModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        supplier={selectedSupplier}
        title={selectedSupplier ? 'Editar Proveedor' : 'Nuevo Proveedor'}
      />

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          ¿Estás seguro de que deseas eliminar el proveedor "{supplierToDelete?.nombre}"?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancelar</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SupplierHub;