import { 
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from './register.services';
import type { RegisterFormInputs } from './register.models';
import { mapFormDataToRequest } from './register.mapper';



export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    const request = mapFormDataToRequest(data);
    const response = registerUser(request);
    if (response) {
      console.log('Usuario registrado:', response);
    } else {
      console.error('Error al registrar el usuario');
    }
  };

  // Para validar que password y confirmPassword coincidan
  const password = watch('password');

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Imagen lateral */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url(src/assets/ipharma-bkg.png)',
          backgroundSize: 'fill',
          backgroundPosition: 'center',
        }}
      />

      {/* Formulario */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f4f6f8',
        }}
      >
        <Paper
          elevation={3}
          sx={{ p: 6, width: '100%', maxWidth: 400, borderRadius: 3 }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h5" gutterBottom textAlign="center">
            Registrarse
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Nombre completo"
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
            {...register('nombre', {
              required: 'El nombre es obligatorio',
              minLength: { value: 3, message: 'Mínimo 3 caracteres' },
            })}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email no válido',
              },
            })}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: { value: 6, message: 'Mínimo 6 caracteres' },
            })}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Confirmar contraseña"
            type={showConfirmPassword ? 'text' : 'password'}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'Debe confirmar la contraseña',
              validate: (value) =>
                value === password || 'Las contraseñas no coinciden',
            })}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      edge="end"
                      aria-label="toggle confirm password visibility"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2, bgcolor: '#00447e', '&:hover': { bgcolor: '#00376a' } }}
          >
            Registrarse
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default RegisterPage;
