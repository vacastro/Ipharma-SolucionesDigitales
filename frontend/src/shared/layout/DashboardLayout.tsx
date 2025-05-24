// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

export const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#f9f9f9' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
