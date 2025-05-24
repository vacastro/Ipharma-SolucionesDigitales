// src/components/PageLoader.tsx
import { Box, CircularProgress } from '@mui/material';

const PageLoader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <CircularProgress />
  </Box>
);

export default PageLoader;
