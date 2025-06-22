import prisma from '../db';

export async function descontarStockConAlerta(medicamentoId: number, cantidad: number) {
    const medicamento = await prisma.medicamento.findUnique({
        where: { id: medicamentoId },
    });

    if (!medicamento) {
        throw new Error('Medicamento no encontrado');
    }

    const nuevoStock = medicamento.stock - cantidad;

    if (nuevoStock < 0) {
        throw new Error(`Stock insuficiente para ${medicamento.nombre}`);
    }

    await prisma.medicamento.update({
        where: { id: medicamentoId },
        data: {
            stock: nuevoStock,
        },
    });

    // Si el stock es bajo, verificamos si ya hay una alerta
    if (nuevoStock <= medicamento.stockMinimo) {
        const alertaExistente = await prisma.alertaStock.findFirst({
            where: {
                medicamentoId: medicamento.id,
            },
        });

        if (!alertaExistente) {
            await prisma.alertaStock.create({
                data: {
                    medicamentoId: medicamento.id,
                    mensaje: `Stock bajo. Reponer a la brevedad.`,
                },
            });
        }
    } else {
        // Si el stock se recuperó, eliminamos la alerta existente
        await prisma.alertaStock.deleteMany({
            where: {
                medicamentoId: medicamento.id,
            },
        });
    }

    return nuevoStock;
}
