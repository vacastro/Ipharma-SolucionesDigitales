import { PersonAdd } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useNotification } from '../../shared/notifications/notifications.provider'
import { useSidebar } from '../../shared/sidebar/hooks/useSidebar'
import { theme } from '../../theme/theme'
import {
  editUsuario,
  fetchUsuarios,
  removeUsuario,
  saveUsuario,
} from './AccessPharma.services'
import { AccessPharmaModal } from './components/AccessPharmaModal'
import type { Usuario, UsuarioFormData } from '../../api/usuario/usuario.model'

export const AccessPharmaPage: React.FC = () => {
  const [data, setData] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null)
  const [usuarioToDelete, setUsuarioToDelete] = useState<Usuario | null>(null)
  const { showNotification } = useNotification()
  const { setSidebarItems } = useSidebar()

  useEffect(() => {
    setSidebarItems([
      {
        text: 'Nuevo Usuario',
        icon: <PersonAdd />,
        onClick: handleCreate,
      },
    ])
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const usuarios = await fetchUsuarios()
      setData(usuarios)
    } catch (error: unknown) {
      console.log(error)
      showNotification('Error al cargar usuarios', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleCreate = () => {
    setSelectedUsuario(null)
    setModalOpen(true)
  }

  const handleEdit = (usuario: Usuario) => {
    setSelectedUsuario(usuario)
    setModalOpen(true)
  }

  const handleDelete = (usuario: Usuario) => {
    setUsuarioToDelete(usuario)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (usuarioToDelete) {
      try {
        await removeUsuario(usuarioToDelete.id!)
        showNotification('Usuario eliminado exitosamente', 'success')
        loadData()
      } catch (error: unknown) {
        console.log(error)
        showNotification('Error al eliminar usuario', 'error')
      }
    }
    setDeleteDialogOpen(false)
    setUsuarioToDelete(null)
  }

  const handleSave = async (formData: UsuarioFormData) => {
    try {
      if (selectedUsuario) {
        await editUsuario(selectedUsuario.id!, formData)
        showNotification('Usuario actualizado exitosamente', 'success')
      } else {
        await saveUsuario(formData)
        showNotification('Usuario creado exitosamente', 'success')
      }
      loadData()
    } catch (error: unknown) {
      console.log(error)
      showNotification('Error al guardar usuario', 'error')
    }
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1.5 },
    { field: 'perfil', headerName: 'Perfil', flex: 1 },
    { field: 'activo', headerName: 'Activo', flex: 1 },
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
  ]

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Gestión de Usuarios
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

      <AccessPharmaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        usuario={selectedUsuario}
        title={selectedUsuario ? 'Editar Usuario' : 'Nuevo Usuario'}
      />

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          ¿Estás seguro de que deseas eliminar el usuario"
          {usuarioToDelete?.nombre}"?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancelar</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default AccessPharmaPage
