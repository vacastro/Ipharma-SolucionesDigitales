import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Search,
  AddBox,
  Event,
  Inventory,
  History,
  Warning,
  Help
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Búsqueda', icon: <Search />, path: '/medicamentos/buscar' },
  { text: 'Ingresar Medicamento', icon: <AddBox />, path: '/medicamentos/ingresar' },
  { text: 'Control de Vencimientos', icon: <Event />, path: '/medicamentos/vencimientos' },
  { text: 'Gestión de Lotes', icon: <Inventory />, path: '/medicamentos/lotes' },
  { text: 'Historial de cambios', icon: <History />, path: '/medicamentos/historial' },
  { text: 'Inventario Físico', icon: <Inventory />, path: '/medicamentos/inventario' },
  { text: 'Alertas de Stock', icon: <Warning />, path: '/medicamentos/alertas' },
  { text: 'Tutoriales', icon: <Help />, path: '/tutoriales' },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: '#eaf0ff',
          pt: 2,
        },
      }}
    >
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography variant="h6" sx={{ color: '#155fa0', fontWeight: 'bold' }}>
          IPHARMA
        </Typography>
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}