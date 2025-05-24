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
  Search, AddBox, Event, Inventory, History, Warning, Help
} from '@mui/icons-material';

const menuItems = [
  { text: 'Búsqueda', icon: <Search /> },
  { text: 'Ingresar Medicamento', icon: <AddBox /> },
  { text: 'Control de Vencimientos', icon: <Event /> },
  { text: 'Gestión de Lotes', icon: <Inventory /> },
  { text: 'Historial de cambios', icon: <History /> },
  { text: 'Inventario Físico', icon: <Inventory /> },
  { text: 'Alertas de Stock', icon: <Warning /> },
  { text: 'Tutoriales', icon: <Help /> },
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
        {menuItems.map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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
