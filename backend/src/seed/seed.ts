import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function main() {
    console.log('Limpiando base de datos...');
    //await prisma.ventaMedicamento.deleteMany();
    //await prisma.recetaMedicamento.deleteMany();
    //await prisma.venta.deleteMany();
    //await prisma.receta.deleteMany();
    //await prisma.inventario.deleteMany();
    //await prisma.devolucion.deleteMany();
    await prisma.medicamento.deleteMany();
    await prisma.proveedor.deleteMany();
    //await prisma.usuario.deleteMany();
    //await prisma.cliente.deleteMany();

    console.log('Insertando proveedores...');
    const proveedor = await prisma.proveedor.create({
        data: {
            nombre: 'Laboratorios A',
            direccion: 'Calle Falsa 123',
            telefono: 123456789,
        },
    });

    console.log('Insertando medicamentos...');
    await prisma.medicamento.createMany({
        data: [
            {
                nombre: 'Paracetamol',
                principioActivo: 'Paracetamol',
                laboratorio: 'Lab A',
                proveedorId: proveedor.id,
                fechaVencimiento: new Date('2026-01-01'),
                formaFarmaceutica: 'comprimido',
                presentacion: 'caja10',
                lote: 'L12345',
                stock: 50,
            },
            {
                nombre: 'Ibuprofeno',
                principioActivo: 'Ibuprofeno',
                laboratorio: 'Lab A',
                proveedorId: proveedor.id,
                fechaVencimiento: new Date('2025-12-01'),
                formaFarmaceutica: 'comprimido',
                presentacion: 'caja5',
                lote: 'L54321',
                stock: 30,
            },
        ],
    });

    console.log('Seed completo');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
