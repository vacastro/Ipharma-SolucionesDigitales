import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login } from '../../redux/slices/authSlice';
import { EnumPerfil } from '../../api/enums.api';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulamos un login exitoso
    const fakeUser = { id: 1, nombre: 'Juan Pérez', email, clave:'', activo: true, perfil:EnumPerfil.farmaceutico };
    const fakeToken = 'abc123';

    dispatch(login({ user: fakeUser, token: fakeToken }));
    localStorage.setItem('token', fakeToken); // para persistir

    navigate('/medicamentos');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Iniciar sesión
      </Typography>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        type="password"
        label="Contraseña"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        Ingresar
      </Button>

      {isAuthenticated && (
        <Typography color="success.main" mt={2}>
          Sesión iniciada correctamente.
        </Typography>
      )}
    </Box>
  );
};
