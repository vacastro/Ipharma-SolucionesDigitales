"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPresentaciones = exports.obtenerFormasFarmaceuticas = exports.cargarLoteMedicamentos = exports.obtenerMedicamentosProximosAVencer = exports.buscarMedicamentos = exports.obtenerMedicamentos = exports.eliminarMedicamento = exports.actualizarMedicamento = exports.crearMedicamento = void 0;
const prisma_1 = require("../../src/generated/prisma");
const XLSX = __importStar(require("xlsx"));
const prisma = new prisma_1.PrismaClient();
// METODO PARA CREAR UN NUEVO MEDICAMENTO
const crearMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, principioActivo, laboratorio, proveedorId, fechaVencimiento, formaFarmaceutica, presentacion, lote, stock, } = req.body;
        // Validaciones
        if (!nombre || !principioActivo || !laboratorio || !proveedorId ||
            !fechaVencimiento || !formaFarmaceutica || !presentacion || !lote || stock === undefined) {
            res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }
        // Verificar proveedor
        const proveedor = yield prisma.proveedor.findUnique({
            where: { id: Number(proveedorId) },
        });
        if (!proveedor) {
            res.status(404).json({ message: 'Proveedor no encontrado.' });
        }
        const nuevoMedicamento = yield prisma.medicamento.create({
            data: {
                nombre: nombre.trim(),
                principioActivo: principioActivo.trim(),
                laboratorio: laboratorio.trim(),
                proveedorId: Number(proveedorId),
                fechaVencimiento: new Date(fechaVencimiento),
                formaFarmaceutica: formaFarmaceutica.trim(),
                presentacion: presentacion.trim(),
                lote: lote.trim(),
                stock: Number(stock),
            },
        });
        res.status(201).json(nuevoMedicamento);
    }
    catch (error) {
        console.error('Error al crear medicamento:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});
exports.crearMedicamento = crearMedicamento;
// METODO PARA MODIFICAR ALGUN CAMPO DE MEDICAMENTO
const actualizarMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, principioActivo, laboratorio, proveedorId, fechaVencimiento, formaFarmaceutica, presentacion, lote, stock, } = req.body;
    try {
        const medicamentoExistente = yield prisma.medicamento.findUnique({
            where: { id: Number(id) },
        });
        if (!medicamentoExistente) {
            res.status(404).json({ message: 'Medicamento no encontrado.' });
        }
        // Validar proveedor
        if (proveedorId) {
            const proveedor = yield prisma.proveedor.findUnique({
                where: { id: Number(proveedorId) },
            });
            if (!proveedor) {
                res.status(404).json({ message: 'Proveedor no encontrado.' });
            }
        }
        const medicamentoActualizado = yield prisma.medicamento.update({
            where: { id: Number(id) },
            data: {
                nombre,
                principioActivo,
                laboratorio,
                proveedorId,
                fechaVencimiento: fechaVencimiento ? new Date(fechaVencimiento) : undefined,
                formaFarmaceutica: formaFarmaceutica ? formaFarmaceutica.trim() : undefined,
                presentacion: presentacion ? presentacion.trim() : undefined,
                lote,
                stock,
            },
        });
        res.status(200).json(medicamentoActualizado);
    }
    catch (error) {
        console.error('Error al actualizar medicamento:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});
exports.actualizarMedicamento = actualizarMedicamento;
// METODO PARA ELIMINAR UN MEDICAMENTO
const eliminarMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const medicamentoExistente = yield prisma.medicamento.findUnique({
            where: { id: Number(id) },
        });
        if (!medicamentoExistente) {
            res.status(404).json({ message: 'Medicamento no encontrado.' });
        }
        yield prisma.medicamento.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ message: 'Medicamento eliminado correctamente.' });
    }
    catch (error) {
        console.error('Error al eliminar medicamento:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});
exports.eliminarMedicamento = eliminarMedicamento;
// METODO PARA OBTENER TODOS LOS MEDICAMENTOS DE LA BASE DE DATOS
const obtenerMedicamentos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicamentos = yield prisma.medicamento.findMany({
            include: {
                proveedor: true, // trae datos del proveedor asociado
            },
            orderBy: {
                nombre: 'asc',
            },
        });
        if (medicamentos.length === 0) {
            res.status(404).json({ message: 'No se encontraron medicamentos.' });
        }
        res.status(200).json(medicamentos);
    }
    catch (error) {
        console.error('Error al obtener medicamentos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});
exports.obtenerMedicamentos = obtenerMedicamentos;
// METODO PARA BUSCAR UN MEDICAMENTO POR NOMBRE, PRINCIPIO ACTIVO O LABORATORIO
const buscarMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, principioActivo, laboratorio } = req.query;
    try {
        const todos = yield prisma.medicamento.findMany({
            include: {
                proveedor: true,
            },
            orderBy: {
                nombre: 'asc',
            },
        });
        const filtroTexto = (valor, texto) => valor.toLowerCase().includes(texto.toLowerCase());
        const resultado = todos.filter((med) => {
            const coincideNombre = !nombre || filtroTexto(med.nombre, nombre);
            const coincidePA = !principioActivo || filtroTexto(med.principioActivo, principioActivo);
            const coincideLab = !laboratorio || filtroTexto(med.laboratorio, laboratorio);
            return coincideNombre && coincidePA && coincideLab;
        });
        if (resultado.length === 0) {
            res.status(404).json({ message: 'No se encontraron medicamentos con esos filtros.' });
            return;
        }
        res.status(200).json(resultado);
    }
    catch (error) {
        console.error('Error al buscar medicamentos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
        return;
    }
});
exports.buscarMedicamentos = buscarMedicamentos;
// METODO PARA TRAER LOS MEDICAMENTOS ORDENADOS POR FECHA DE VENCIMIENTO ASCENDENTE
const obtenerMedicamentosProximosAVencer = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicamentos = yield prisma.medicamento.findMany({
            orderBy: {
                fechaVencimiento: 'asc',
            },
            include: {
                proveedor: true,
            },
        });
        if (medicamentos.length === 0) {
            res.status(404).json({ message: 'No se encontraron medicamentos.' });
        }
        res.status(200).json(medicamentos);
    }
    catch (error) {
        console.error('Error al obtener medicamentos ordenados por vencimiento:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});
exports.obtenerMedicamentosProximosAVencer = obtenerMedicamentosProximosAVencer;
// METODO PARA CARGAR UN LOTE DE MEDICAMENTOS CON UN ARCHIVO EXCEL O CSV -- FALTA TESTEAR
const cargarLoteMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const proveedorId = req.body.proveedorId;
    const file = req.file;
    if (!proveedorId || !file) {
        res.status(400).json({ message: 'Faltan el archivo o el proveedorId' });
        return;
    }
    try {
        const proveedor = yield prisma.proveedor.findUnique({
            where: { id: Number(proveedorId) },
        });
        if (!proveedor) {
            res.status(404).json({ message: 'Proveedor no encontrado.' });
            return;
        }
        const workbook = XLSX.readFile(file.path);
        const primeraHoja = workbook.SheetNames[0];
        const datos = XLSX.utils.sheet_to_json(workbook.Sheets[primeraHoja], { defval: '' });
        const medicamentosCreados = [];
        for (const fila of datos) {
            const { nombre, principioActivo, laboratorio, fechaVencimiento, formaFarmaceutica, presentacion, lote, stock, } = fila;
            if (!nombre || !principioActivo || !laboratorio ||
                !fechaVencimiento || !formaFarmaceutica || !presentacion ||
                !lote || stock === undefined)
                continue;
            const nuevo = yield prisma.medicamento.create({
                data: {
                    nombre: String(nombre).trim(),
                    principioActivo: String(principioActivo).trim(),
                    laboratorio: String(laboratorio).trim(),
                    proveedorId: Number(proveedorId),
                    fechaVencimiento: new Date(fechaVencimiento),
                    formaFarmaceutica: String(formaFarmaceutica).trim(),
                    presentacion: String(presentacion).trim(),
                    lote: String(lote).trim(),
                    stock: Number(stock),
                },
            });
            medicamentosCreados.push(nuevo);
        }
        res.status(201).json({
            message: 'Carga masiva completada.',
            cantidad: medicamentosCreados.length,
        });
    }
    catch (error) {
        console.error('Error al cargar lote de medicamentos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});
exports.cargarLoteMedicamentos = cargarLoteMedicamentos;
// METODO PARA TREAR TODAS LAS FORMAS FARMACEUTICAS, QUE PUEDEN SERVIR PARA UN COMBO BOX
const obtenerFormasFarmaceuticas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formas = Object.values(prisma_1.FormaFarmaceutica);
    res.status(200).json(formas);
});
exports.obtenerFormasFarmaceuticas = obtenerFormasFarmaceuticas;
//METODO PARA TREAR TODAS LAS PRESENTACIONES, QUE PUEDEN SERVIR PARA UN COMBO BOX
const obtenerPresentaciones = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const presentaciones = Object.values(prisma_1.Presentacion);
    res.status(200).json(presentaciones);
});
exports.obtenerPresentaciones = obtenerPresentaciones;
