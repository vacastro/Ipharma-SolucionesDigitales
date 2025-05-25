import { Box, Button, Typography } from '@mui/material';
import {
  Search,
  AddBox,
  Event,
  Inventory,
  History,
  Warning,
  Help,
} from '@mui/icons-material';

const menuItems = [
  { text: 'Pharma Stock', icon: <Search sx={{ color: '#155fa0' }} /> },
  { text: 'Supplier Hub', icon: <AddBox sx={{ color: '#155fa0' }} /> },
  { text: 'Rx Connect', icon: <Event sx={{ color: '#155fa0' }} /> },
  { text: 'Alertify', icon: <Inventory sx={{ color: '#155fa0' }} /> },
  { text: 'Pharma POS', icon: <History sx={{ color: '#155fa0' }} /> },
  { text: 'Pharma Analitycs', icon: <Inventory sx={{ color: '#155fa0' }} /> },
  { text: 'Access Pharma', icon: <Warning sx={{ color: '#155fa0' }} /> },
  { text: 'Pharma Docs', icon: <Help sx={{ color: '#155fa0' }} /> },
];

const MenuPrincipal = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#eaf0ff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
        px: 2,
      }}
    >

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 5,
          width: '100%',
          maxWidth: 1000,
        }}
      >
        {menuItems.map(({ text, icon }) => (
          <Button
            key={text}
            variant="outlined"
            startIcon={icon}
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              borderColor: '#ccc',
              justifyContent: 'flex-start',
              px: 3,
              py: 2,
              textTransform: 'none',
              fontSize: '1rem',
              width: '100%',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default MenuPrincipal;
