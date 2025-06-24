import { Request, Response } from 'express';
import prisma from '../db';

export async function obtenerAlertasStock(req: Request, res: Response) {
    try {
        const alertas = await prisma.alertaStock.findMany({
            include: {
                medicamento: true, // para mostrar nombre, etc.
            },
            orderBy: {
                fecha: 'desc',
            },
        });

        res.json(alertas);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
