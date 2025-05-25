import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  Paper
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { loginUser } from './login.services';
import { useNotification } from '../../shared/notifications/notifications.provider';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/slices/authSlice';


interface LoginFormInputs {
  email: string;
  password: string;
  remember: boolean;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { showNotification } = useNotification();

  const onSubmit = async (data: LoginFormInputs) => {
    try{
      const response = await loginUser(data.email, data.password);
      if (response.success) {
        // Guardar en Redux
        dispatch(login({
          user: response.data.user,
          token: response.data.token
        }));
        
        // También guarda en localStorage para persistencia
        localStorage.setItem('token', response.data.token);

        showNotification('Inicio de sesión exitoso', 'success');
        // Aquí puedes redirigir al usuario a la página principal o dashboard
        navigate('/medicamentos');

      } else {
        showNotification(response.message || 'Error al iniciar sesión', 'error');
      }
    } catch (error) {
      showNotification('Error inesperado al iniciar sesión', 'error');
    }
  };

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
            Iniciar sesión
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Ingrese su email"
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
            label="Ingrese su contraseña"
            type={'password'}
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: { value: 6, message: 'Mínimo 6 caracteres' },
            })}
          />

          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <FormControlLabel
              control={<Checkbox {...register('remember')} />}
              label="Recordarme"
            />
            <Link href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2, bgcolor: '#00447e', '&:hover': { bgcolor: '#00376a' } }}
          >
            Ingresar
          </Button>

          <Typography variant="body2" textAlign="center">
            <Link component={RouterLink} to="/medicamentos">Registrarse</Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;