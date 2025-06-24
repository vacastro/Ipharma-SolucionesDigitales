import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import { SidebarProvider, useSidebar } from '../sidebar/hooks/useSidebar';

const DashboardContent = () => {
  const { sidebarItems } = useSidebar(); 

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar menuItems={sidebarItems} />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#f9f9f9' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  );
};