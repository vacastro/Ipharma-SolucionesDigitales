"use strict";
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
exports.eliminarProveedor = exports.updateProveedor = exports.obtenerProveedores = exports.crearProveedor = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const crearProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, direccion, telefono } = req.body;
        // Validaciones básicas
        if (!nombre || !direccion || !telefono) {
            res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }
        // Validar que no exista un proveedor con el mismo nombre
        const proveedorExistente = yield prisma.proveedor.findFirst({
            where: { nombre: nombre.trim() },
        });
        if (proveedorExistente) {
            res.status(409).json({ message: 'Ya existe un proveedor con ese nombre.' });
        }
        // Crear proveedor
        const nuevoProveedor = yield prisma.proveedor.create({
            data: {
                nombre: nombre.trim(),
                direccion: direccion.trim(),
                telefono: Number(telefono),
            },
        });
        res.status(201).json(nuevoProveedor);
    }
    catch (error) {
        console.error('Error al crear proveedor:', error);
        res.status(500).json({ message: 'Error del servidor.' });
    }
});
exports.crearProveedor = crearProveedor;
const obtenerProveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proveedores = yield prisma.proveedor.findMany();
        if (proveedores.length === 0) {
            res.status(404).json({ message: 'No se encontraron proveedores.' });
        }
        res.status(200).json(proveedores);
    }
    catch (error) {
        console.error('Error al obtener proveedores:', error);
        res.status(500).json({ message: 'Error del servidor.' });
    }
});
exports.obtenerProveedores = obtenerProveedores;
const updateProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, direccion, telefono } = req.body;
    try {
        const proveedorExistente = yield prisma.proveedor.findUnique({
            where: { id: Number(id) },
        });
        if (!proveedorExistente) {
            res.status(404).json({ message: "Proveedor no encontrado" });
        }
        const proveedorActualizado = yield prisma.proveedor.update({
            where: { id: Number(id) },
            data: {
                nombre,
                direccion,
                telefono,
            },
        });
        res.status(200).json(proveedorActualizado);
    }
    catch (error) {
        console.error("Error al actualizar proveedor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});
exports.updateProveedor = updateProveedor;
const eliminarProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const proveedorExistente = yield prisma.proveedor.findUnique({
            where: { id: Number(id) },
        });
        if (!proveedorExistente) {
            res.status(404).json({ message: "Proveedor no encontrado" });
        }
        yield prisma.proveedor.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ message: "Proveedor eliminado correctamente" });
    }
    catch (error) {
        console.error("Error al eliminar proveedor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});
exports.eliminarProveedor = eliminarProveedor;
