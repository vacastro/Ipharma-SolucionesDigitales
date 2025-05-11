const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const medicamentos = await prisma.medicamento.findMany();
  console.log(medicamentos);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
