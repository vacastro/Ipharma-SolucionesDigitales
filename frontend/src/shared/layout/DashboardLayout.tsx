import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const DashboardLayout = () => {
  return (
    <Box display="flex">
      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};