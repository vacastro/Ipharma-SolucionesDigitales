import { PrismaClient } from '../src/generated/prisma'; // O desde '@prisma/client' si lo tenés así

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
};

const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;
