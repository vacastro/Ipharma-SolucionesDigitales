import { Request, Response } from 'express';
import { descontarStockConAlerta } from '../services/stockService';
import prisma from '../db';

export async function registrarVentaMedicamento(req: Request, res: Response) {
    const {
        total,
        fecha,
        formaPago,
        usuarioId,
        clienteNombre,
        clienteEmail,
        ventaMedicamentos
    } = req.body;

    if (
        !total ||
        !fecha ||
        !formaPago ||
        !usuarioId ||
        !clienteNombre ||
        !clienteEmail ||
        !Array.isArray(ventaMedicamentos) ||
        ventaMedicamentos.length === 0
    ) {
        res.status(400).json({ message: 'Faltan datos requeridos para registrar la venta' });
    }

    try {
        // Buscar o crear cliente
        let cliente = await prisma.cliente.findFirst({
            where: { email: clienteEmail },
        });

        if (!cliente) {
            cliente = await prisma.cliente.create({
                data: {
                    nombre: clienteNombre,
                    email: clienteEmail,
                    suscripto: false,
                },
            });
        }

        // Crear la venta con referencia al cliente
        const venta = await prisma.venta.create({
            data: {
                total,
                fecha: new Date(fecha),
                formaPago,
                usuario: {
                    connect: { id: usuarioId }
                },
                cliente: {
                    connect: { id: cliente.id } // Connect to existing client
                },
                ventaMedicamentos: {
                    create: ventaMedicamentos.map((item: any) => ({
                        medicamentoId: item.medicamentoId,
                        cantidad: item.cantidad,
                        precioUnitario: item.precioUnitario,
                    })),
                },
            },
            include: { ventaMedicamentos: true },
        });

        // Actualizar stock + alertas
        for (const item of ventaMedicamentos) {
            await descontarStockConAlerta(item.medicamentoId, item.cantidad);
        }

        res.status(200).json({ message: 'Venta registrada con éxito', venta });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar la venta', error: (error as Error).message });
    }
}