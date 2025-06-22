import {
    Box,
    CircularProgress,
    Typography,
    Paper
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Medicamento {
    id: number;
    nombre: string;
    principioActivo: string;
    laboratorio: string;
    fechaVencimiento: string;
    formaFarmaceutica: string;
    presentacion: string;
    lote: string;
    stock: number;
    proveedor: {
        nombre: string;
    };
}

const calcularColor = (fechaStr: string): string => {
    const hoy = new Date();
    const fecha = new Date(fechaStr);
    const dias = Math.floor((fecha.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    if (dias < 0 || dias <= 90) return '#ff4d4f'; // rojo
    if (dias <= 365) return '#ffc53d'; // amarillo
    return '#73d13d'; // verde
};

const ControlVencimientosPage = () => {
    const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtener = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/medicamentos/vencimiento');
                console.log('🧪 Medicamentos vencimiento:', response.data);
                setMedicamentos(response.data);
            } catch (error) {
                console.error('Error al obtener vencimientos:', error);
            } finally {
                setLoading(false);
            }
        };

        obtener();
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'indicador',
            headerName: '',
            width: 50,
            renderCell: (params: any) => {
                const color = calcularColor(params.row.fechaVencimiento);
                return (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',     // centra verticalmente
                            justifyContent: 'center'  // centra horizontalmente
                        }}
                    >
                        <Box
                            sx={{
                                width: 14,
                                height: 14,
                                borderRadius: '50%',
                                bgcolor: color,
                            }}
                        />
                    </Box>
                );
            }
        },
        { field: 'nombre', headerName: 'Nombre', flex: 1 },
        { field: 'principioActivo', headerName: 'Principio Activo', flex: 1 },
        { field: 'laboratorio', headerName: 'Laboratorio', flex: 1 },
        { field: 'formaFarmaceutica', headerName: 'Forma Farm.', flex: 1 },
        { field: 'presentacion', headerName: 'Presentación', flex: 1 },
        { field: 'lote', headerName: 'Lote', flex: 0.8 },
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
        { field: 'stock', headerName: 'Stock', flex: 0.6 }
    ];

    return (
        <Box sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', p: 4 }}>
            <Typography variant="h5" gutterBottom>
                Control de Vencimientos
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Paper sx={{ p: 2 }}>
                    <DataGrid
                        rows={medicamentos}
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

export default ControlVencimientosPage;
