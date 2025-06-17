"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const server = app_1.default.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Manejo de cierre de conexion a la base de datos
//process.on('SIGINT', async () => {
// console.log('Cerrando conexión con la base de datos...');
// await prisma.$disconnect();
// server.close(() => {
//  console.log('Servidor cerrado.');
//  process.exit(0);
//});
//});
