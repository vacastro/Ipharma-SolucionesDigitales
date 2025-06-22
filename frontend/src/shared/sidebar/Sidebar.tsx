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
import type { ReactNode } from 'react';

export interface SidebarMenuItem {
  text: string;
  icon: ReactNode;
  onClick?: () => void;
  path?: string;
}

interface SidebarProps {
  menuItems: SidebarMenuItem[];
  title?: string;
}

export default function Sidebar({ menuItems, title = "IPHARMA" }: SidebarProps) {
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
          {title}
        </Typography>
        <List>
          {menuItems.map(({ text, icon, onClick }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={onClick}>
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
