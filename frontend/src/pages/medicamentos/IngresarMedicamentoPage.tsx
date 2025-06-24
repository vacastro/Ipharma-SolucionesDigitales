import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
    Autocomplete,
    Paper,
    Select,
    InputLabel,
    FormControl
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Proveedor {
    id: number;
    nombre: string;
}

const IngresarMedicamentoPage = () => {
    const [formasFarmaceuticas, setFormasFarmaceuticas] = useState<string[]>([]);
    const [presentaciones, setPresentaciones] = useState<string[]>([]);
    const [proveedores, setProveedores] = useState<Proveedor[]>([]);

    const [formData, setFormData] = useState({
        nombre: '',
        principioActivo: '',
        presentacion: '',
        vencimiento: '',
        cantidad: '',
        formaFarmaceutica: '',
        conservacion: '',
        precio: '',
        laboratorio: '',
        lote: '',
        proveedorNombre: '',
        proveedorId: 0,
        codigoBarras: ''
    });

    const [loteFile, setLoteFile] = useState<File | null>(null);
    const [loteProveedorId, setLoteProveedorId] = useState<number | string>('');

    useEffect(() => {
        const fetchData = async () => {
            const [formas, present, provs] = await Promise.all([
                axios.get<string[]>('http://localhost:5000/api/medicamentos/formas-farmaceuticas'),
                axios.get<string[]>('http://localhost:5000/api/medicamentos/presentaciones'),
                axios.get<Proveedor[]>('http://localhost:5000/api/proveedores')
            ]);
            setFormasFarmaceuticas(formas.data);
            setPresentaciones(present.data);
            setProveedores(provs.data);
        };

        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const proveedorSeleccionado = proveedores.find(p => p.nombre === formData.proveedorNombre);

        if (!proveedorSeleccionado) {
            alert('Proveedor no encontrado. Debe ingresarlo manualmente en Supplier Hub.');
            return;
        }

        const payload = {
            nombre: formData.nombre,
            principioActivo: formData.principioActivo,
            laboratorio: formData.laboratorio,
            proveedorId: proveedorSeleccionado.id,
            fechaVencimiento: formData.vencimiento,
            formaFarmaceutica: formData.formaFarmaceutica,
            presentacion: formData.presentacion,
            lote: formData.lote,
            stock: parseInt(formData.cantidad)
        };

        try {
            await axios.post('http://localhost:5000/api/medicamentos', payload);
            alert('✅ Medicamento ingresado con éxito');
            setFormData({
                nombre: '',
                principioActivo: '',
                presentacion: '',
                vencimiento: '',
                cantidad: '',
                formaFarmaceutica: '',
                conservacion: '',
                precio: '',
                laboratorio: '',
                lote: '',
                proveedorNombre: '',
                proveedorId: 0,
                codigoBarras: ''
            });
        } catch (error: any) {
            console.error('❌ Error al ingresar el medicamento:', error?.response?.data || error);
            alert('❌ Error al ingresar el medicamento: ' + (error?.response?.data?.message || 'Ver consola para más detalles'));
        }
    };

    const handleLoteUpload = async () => {
        if (!loteFile || !loteProveedorId) {
            alert('Seleccioná un archivo y un proveedor.');
            return;
        }

        const formData = new FormData();
        formData.append('file', loteFile);
        formData.append('proveedorId', loteProveedorId.toString());

        try {
            const res = await axios.post('http://localhost:5000/api/medicamentos/lote', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(`✅ ${res.data.message} (${res.data.cantidad} medicamentos ingresados)`);
            setLoteFile(null);
            setLoteProveedorId('');
        } catch (error: any) {
            console.error('❌ Error al cargar lote:', error?.response?.data || error);
            alert('❌ Error al cargar lote: ' + (error?.response?.data?.message || 'Ver consola para más detalles'));
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4, bgcolor: '#f5f7fb' }}>
            <Paper sx={{ p: 4, maxWidth: 1200, width: '100%', borderRadius: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Ingresar Medicamento
                </Typography>

                {/* FORMULARIO INDIVIDUAL */}
                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', mb: 4 }}>
                    {/* Columna 1 */}
                    <Box sx={{ flex: 1, minWidth: 250 }}>
                        <TextField label="Principio Activo" name="principioActivo" value={formData.principioActivo} fullWidth margin="normal" onChange={handleChange} />
                        <TextField label="Presentación" name="presentacion" select value={formData.presentacion} fullWidth margin="normal" onChange={handleChange}>
                            {presentaciones.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
                        </TextField>
                        <TextField label="Fecha de Vencimiento" name="vencimiento" type="date" value={formData.vencimiento} InputLabelProps={{ shrink: true }} fullWidth margin="normal" onChange={handleChange} />
                        <TextField label="Cantidad" name="cantidad" type="number" value={formData.cantidad} fullWidth margin="normal" onChange={handleChange} />
                    </Box>

                    {/* Columna 2 */}
                    <Box sx={{ flex: 1, minWidth: 250 }}>
                        <TextField label="Nombre Comercial" name="nombre" value={formData.nombre} fullWidth margin="normal" onChange={handleChange} />
                        <TextField label="Forma Farmacéutica" name="formaFarmaceutica" select value={formData.formaFarmaceutica} fullWidth margin="normal" onChange={handleChange}>
                            {formasFarmaceuticas.map((f) => <MenuItem key={f} value={f}>{f}</MenuItem>)}
                        </TextField>
                        <TextField label="Conservación" name="conservacion" value={formData.conservacion} fullWidth margin="normal" onChange={handleChange} />
                        <TextField label="Precio" name="precio" type="number" value={formData.precio} fullWidth margin="normal" onChange={handleChange} />
                    </Box>

                    {/* Columna 3 */}
                    <Box sx={{ flex: 1, minWidth: 250 }}>
                        <TextField label="Laboratorio" name="laboratorio" value={formData.laboratorio} fullWidth margin="normal" onChange={handleChange} />
                        <TextField label="Lote" name="lote" value={formData.lote} fullWidth margin="normal" onChange={handleChange} />
                        <Autocomplete
                            options={proveedores.map(p => p.nombre)}
                            value={formData.proveedorNombre}
                            onInputChange={(_, value) => setFormData({ ...formData, proveedorNombre: value })}
                            renderInput={(params) => (
                                <TextField {...params} label="Droguería (Proveedor)" margin="normal" fullWidth />
                            )}
                        />
                        <TextField label="Código de Barras" name="codigoBarras" value={formData.codigoBarras} fullWidth margin="normal" onChange={handleChange} />
                    </Box>
                </Box>

                <Button variant="contained" onClick={handleSubmit} sx={{ bgcolor: '#00447e', '&:hover': { bgcolor: '#00376a' }, mb: 6 }}>
                    Ingresar
                </Button>

                {/* SECCIÓN CARGA MASIVA */}
                <Typography variant="h6" gutterBottom>Carga Masiva por Lote</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                    <FormControl sx={{ minWidth: 250 }}>
                        <InputLabel>Proveedor</InputLabel>
                        <Select
                            value={loteProveedorId}
                            label="Proveedor"
                            onChange={(e) => setLoteProveedorId(e.target.value)}
                        >
                            {proveedores.map(p => (
                                <MenuItem key={p.id} value={p.id}>{p.nombre}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button variant="outlined" component="label">
                            Seleccionar Archivo
                            <input
                                type="file"
                                hidden
                                accept=".xlsx,.csv"
                                onChange={(e) => setLoteFile(e.target.files?.[0] || null)}
                            />
                        </Button>
                        <TextField
                            label="Archivo seleccionado"
                            value={loteFile?.name || ''}
                            InputProps={{ readOnly: true }}
                            size="small"
                            sx={{ minWidth: 300 }}
                        />
                    </Box>
                    <Button variant="contained" onClick={handleLoteUpload} sx={{ bgcolor: '#007a4d', '&:hover': { bgcolor: '#005c3a' } }}>
                        Cargar Lote
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default IngresarMedicamentoPage;
