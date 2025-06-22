// Paso 1 + Paso 2: Autocomplete + carrito + confirmación simple
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Autocomplete,
  IconButton
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Add, Delete } from '@mui/icons-material';
import { useNotification } from '../../shared/notifications/notifications.provider';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
import { getMedicamentos } from '../medicamentos/medicamentos.service';
import { registerVenta } from './pharmapos.services';
import { EnumFormaPago } from '../../api/enums.api';
import { Grid } from '@mui/material';



interface MedicamentoSeleccionado {
  medicamento: Medicamento;
  cantidad: number;
  precioUnitario: number;
}

export const PharmaPosPage = () => {
  const { showNotification } = useNotification();
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [seleccionados, setSeleccionados] = useState<MedicamentoSeleccionado[]>([]);
  const [medicamentoActual, setMedicamentoActual] = useState<Medicamento | null>(null);
  const [cantidad, setCantidad] = useState(1);
  const [precioUnitario, setPrecioUnitario] = useState(0);
  const [clienteNombre, setClienteNombre] = useState('');
  const [clienteEmail, setClienteEmail] = useState('');

  useEffect(() => {
    getMedicamentos().then(setMedicamentos).catch(console.error);
  }, []);

  const agregarMedicamento = () => {
    if (medicamentoActual && cantidad > 0 && precioUnitario > 0) {
      const yaExiste = seleccionados.find(m => m.medicamento.id === medicamentoActual.id);
      if (!yaExiste) {
        setSeleccionados([...seleccionados, { medicamento: medicamentoActual, cantidad, precioUnitario }]);
        setMedicamentoActual(null);
        setCantidad(1);
        setPrecioUnitario(0);
      }
    }
  };

  const eliminarMedicamento = (id: number) => {
    setSeleccionados(prev => prev.filter(m => m.medicamento.id !== id));
  };

  const total = seleccionados.reduce((acc, item) => acc + item.cantidad * item.precioUnitario, 0);

  const confirmarVenta = async () => {
    try {
      const payload = {
      total,
      fecha: new Date().toISOString(),
      formaPago: EnumFormaPago.efectivo,
      usuarioId: 1, // TODO: reemplazar con user real
      clienteNombre,
      clienteEmail,
      ventaMedicamentos: seleccionados.map(item => ({
        medicamentoId: item.medicamento.id,
        cantidad: item.cantidad,
        precioUnitario: item.precioUnitario
      }))
    };

    await registerVenta(payload).then(res => {
      if(res.success){
        showNotification('✅ Venta registrada con éxito', 'success');
        setSeleccionados([]);
        setClienteNombre('');
        setClienteEmail('');
      } else {
        showNotification('❌ Error al registrar la venta', 'error');
      }
    });
  } catch (error: any) {
    showNotification('❌ Error al registrar la venta', 'error');
  }
};

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f4f6f8',
          p: 2,
        }}
      >
        <Paper elevation={3} sx={{ p: 6, width: '100%', maxWidth: 600, borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom textAlign="center">
            Punto de Venta
          </Typography>

          <TextField
            label="Nombre del Cliente"
            fullWidth
            margin="normal"
            value={clienteNombre}
            onChange={(e) => setClienteNombre(e.target.value)}
          />

          <TextField
            label="Email del Cliente"
            fullWidth
            margin="normal"
            type="email"
            value={clienteEmail}
            onChange={(e) => setClienteEmail(e.target.value)}
          />

          <Autocomplete
            options={medicamentos}
            getOptionLabel={(option) => `${option.nombre} (${option.principioActivo})`}
            value={medicamentoActual}
            onChange={(_, value) => setMedicamentoActual(value)}
            renderInput={(params) => <TextField {...params} label="Buscar Medicamento" margin="normal" fullWidth />}
          />

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={6}>
              <TextField
                label="Cantidad"
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                fullWidth
              />
            </Grid>
            <Grid size={6}>
              <TextField
                label="Precio Unitario"
                type="number"
                value={precioUnitario}
                onChange={(e) => setPrecioUnitario(Number(e.target.value))}
                fullWidth
              />
            </Grid>
          </Grid>

          <Button onClick={agregarMedicamento} sx={{ mt: 2 }} variant="outlined" startIcon={<Add />} fullWidth>
            Agregar a la venta
          </Button>

          {seleccionados.length > 0 && (
            <Box mt={4}>
              <Typography variant="h6">Detalle:</Typography>
              {seleccionados.map((item) => (
                <Box key={item.medicamento.id} display="flex" alignItems="center" justifyContent="space-between" mt={1}>
                  <Typography>
                    {item.medicamento.nombre} - {item.cantidad} x ${item.precioUnitario}
                  </Typography>
                  <IconButton onClick={() => eliminarMedicamento(item.medicamento.id)}>
                    <Delete color="error" />
                  </IconButton>
                </Box>
              ))}
              <Typography variant="subtitle1" mt={2} textAlign="right">
                Total: ${total.toFixed(2)}
              </Typography>

              <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={confirmarVenta}>
                Confirmar venta
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default PharmaPosPage;