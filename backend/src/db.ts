import { PrismaClient } from '../generated/prisma';

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

const cleanup = async () => {
    try {
        await prisma.$disconnect();
        console.log('🔌 Prisma desconectado correctamente');
    } catch (err) {
        console.error('❌ Error al desconectar Prisma:', err);
    }
};

process.once('SIGINT', async () => {
    await cleanup();
    process.exit(0);
});

process.once('SIGTERM', async () => {
    await cleanup();
    process.exit(0);
});

process.once('exit', async () => {
    await cleanup();
});


export default prisma;