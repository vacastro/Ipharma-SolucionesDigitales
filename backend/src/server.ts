import app from './app'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

// Manejo de cierre de conexion a la base de datos
process.on('SIGINT', async () => {
  console.log('Cerrando conexión con la base de datos...');
  await prisma.$disconnect();
  server.close(() => {
    console.log('Servidor cerrado.');
    process.exit(0);
  });
});