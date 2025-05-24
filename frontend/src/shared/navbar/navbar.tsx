import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  Notifications,
  HelpOutline,
  ChatBubbleOutline,
  Settings
} from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'flex-end', gap: 2 }}>
        <IconButton><Settings /></IconButton>
        <IconButton><ChatBubbleOutline /></IconButton>
        <IconButton><Notifications /></IconButton>
        <IconButton><HelpOutline /></IconButton>
        <Tooltip title="Perfil">
          <Avatar alt="Usuario" src="/avatar.png" />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
