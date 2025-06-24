import {
    Box,
    Button,
    Typography,
    TextField,
    Paper
} from '@mui/material';
import { useState } from 'react';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { buscarMedicamentos } from '../../api/medicamento/medicamento.api';

const BusquedaMedicamentosPage = () => {
    const [nombre, setNombre] = useState('');
    const [principioActivo, setPrincipioActivo] = useState('');
    const [laboratorio, setLaboratorio] = useState('');
    const [resultados, setResultados] = useState<Medicamento[]>([]);
    const [error, setError] = useState('');

    const handleBuscar = async () => {
        try {
            const data = await buscarMedicamentos({ nombre, principioActivo, laboratorio });
            console.log('Resultados:', data);

            setResultados(data);
            setError('');
        } catch (err) {
            setResultados([]);
            setError('No se encontraron medicamentos con esos filtros.');
        }
    };

    const columns: GridColDef[] = [
        { field: 'nombre', headerName: 'Nombre', flex: 1 },
        { field: 'principioActivo', headerName: 'Principio Activo', flex: 1 },
        { field: 'laboratorio', headerName: 'Laboratorio', flex: 1 },
        { field: 'formaFarmaceutica', headerName: 'Forma Farmacéutica', flex: 1 },
        { field: 'presentacion', headerName: 'Presentación', flex: 1 },
        {
            field: 'fechaVencimiento',
            headerName: 'Vence',
            flex: 1,
            renderCell: (params: any) => {
                const raw = params?.row?.fechaVencimiento;
                if (!raw) return '—';

                const fecha = new Date(raw);
                return isNaN(fecha.getTime())
                    ? 'Fecha inválida'
                    : fecha.toLocaleDateString('es-AR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    });
            },
        },
        { field: 'stock', headerName: 'Stock', flex: 0.5 },
    ];

    return (
        <Box sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', p: 4 }}>
            <Paper sx={{ p: 4, mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Buscar Medicamentos
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
                    <TextField
                        label="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Principio Activo"
                        value={principioActivo}
                        onChange={(e) => setPrincipioActivo(e.target.value)}
                        fullWidth
                    />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            label="Laboratorio"
                            value={laboratorio}
                            onChange={(e) => setLaboratorio(e.target.value)}
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            sx={{ bgcolor: '#00447e', '&:hover': { bgcolor: '#00376a' } }}
                            onClick={handleBuscar}
                        >
                            Buscar
                        </Button>
                    </Box>
                </Box>
            </Paper>

            {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}

            {resultados.length > 0 && (
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Resultados de la búsqueda
                    </Typography>
                    <DataGrid
                        rows={resultados}
                        columns={columns}
                        getRowId={(row) => row.id}
                        autoHeight
                        sx={{ borderRadius: 2, bgcolor: '#fff' }}
                    />
                </Paper>
            )}
        </Box>
    );
};

export default BusquedaMedicamentosPage;
