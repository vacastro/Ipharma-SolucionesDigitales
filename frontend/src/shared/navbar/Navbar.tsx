import {
  ChatBubbleOutline,
  HelpOutline,
  Home,
  Logout,
  Notifications,
  Person,
  Settings
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';
import { fetchAlertas } from '../../services/alerta/alerta.service';
import { useNotification } from '../notifications/notifications.provider';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.auth);
  const { showNotification } = useNotification();

  const [alertas, setAlertas] = useState<any[]>([]);
  const [anchorNotif, setAnchorNotif] = useState<null | HTMLElement>(null);


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
    handleClose();
  };


  useEffect(() => {
  const fetchAlertasAsync = async () => {
    try {
      const alertas = await fetchAlertas();
      setAlertas(alertas);
    } catch (error) {
      showNotification('Error al cargar alertas', 'error');
    }
  };

  fetchAlertasAsync(); // llamada inicial

  const intervalId = setInterval(fetchAlertasAsync, 60 * 60 * 1000); // cada 1 minuto // 60 * 60 * 1000); // cada 1 hora
  return () => clearInterval(intervalId); // limpieza cuando se desmonta
  
}, []);


  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'flex-end', gap: 2 }}>
        <Tooltip title="Volver al Inicio">
          <IconButton edge="start" onClick={() => navigate('/menu-principal')}>
            <Home />
          </IconButton>
        </Tooltip>

        <IconButton><Settings /></IconButton>
        <IconButton><ChatBubbleOutline /></IconButton>
        <IconButton onClick={(event) => setAnchorNotif(event.currentTarget)}>
          <Badge badgeContent={alertas.length} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <Popover
          open={Boolean(anchorNotif)}
          anchorEl={anchorNotif}
          onClose={() => setAnchorNotif(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <List sx={{ width: 300, maxHeight: 400, overflow: 'auto' }}>
            {alertas.length === 0 ? (
              <ListItem>
                <ListItemText primary="Sin alertas por ahora 🎉" />
              </ListItem>
            ) : (
              alertas.map(alerta => (
                <ListItem key={alerta.id}>
                  <ListItemText
                    primary={alerta.medicamento?.nombre || 'Medicamento desconocido'}
                    secondary={alerta.mensaje}
                  />
                </ListItem>
              ))
            )}
          </List>
        </Popover>

        <IconButton><HelpOutline /></IconButton>
        
        <Tooltip title="Perfil">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar alt={user?.nombre || 'Usuario'} src="/avatar.png" />
          </IconButton>
        </Tooltip>
        
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            Mi Perfil
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Cerrar Sesión
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
