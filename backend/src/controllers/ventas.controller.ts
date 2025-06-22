import { Request, Response } from 'express';
import { descontarStockConAlerta } from '../services/stockService';

export async function registrarVentaMedicamento(req: Request, res: Response) {
    const { medicamentoId, cantidad } = req.body;

    if (!medicamentoId || !cantidad) {
        res.status(400).json({ message: 'Faltan datos: medicamentoId o cantidad' });
    }

    try {
        const nuevoStock = await descontarStockConAlerta(medicamentoId, cantidad);
        res.status(200).json({ message: 'Venta registrada', nuevoStock });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar la venta', error: (error as Error).message });
    }
}
