import { Box, Button } from '@mui/material';
import { Inventory } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FolderIcon from '@mui/icons-material/Folder';
import Navbar from '../../shared/navbar/Navbar';
import { Link } from 'react-router-dom'; 

const menuItems = [
  { text: 'Pharma Stock', icon: <AppsIcon sx={{ color: '#155fa0' }} />, path: '/medicamentos' },
  { text: 'Supplier Hub', icon: <LocalShippingIcon sx={{ color: '#155fa0' }} /> },
  { text: 'Rx Connect', icon: <Inventory sx={{ color: '#155fa0' }} /> },
  { text: 'Alertify', icon: <PodcastsIcon sx={{ color: '#155fa0' }} /> },
  { text: 'Pharma POS', icon: <ShoppingCartIcon sx={{ color: '#155fa0' }} /> },
  { text: 'Pharma Analitycs', icon: <TrendingUpIcon sx={{ color: '#155fa0' }} /> },
  { text: 'Access Pharma', icon: <PersonAddIcon sx={{ color: '#155fa0' }} /> },
  { text: 'Pharma Docs', icon: <FolderIcon sx={{ color: '#155fa0' }} /> },
];

const MenuPrincipal = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#eaf0ff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
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
        {menuItems.map(({ text, icon, path }) => (
          <Link key={text} to={path || '#'} style={{ textDecoration: 'none' }}>
          <Button
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
        </Link>
        ))}
      </Box>
    </Box>
    </Box>
  );
};

export default MenuPrincipal;
