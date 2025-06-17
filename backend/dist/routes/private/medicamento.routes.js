"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicamento_controller_1 = require("../../controllers/medicamento.controller");
const upload_1 = require("../../middlewares/upload");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /medicamentos:
 *   post:
 *     summary: Crear un nuevo medicamento
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - principioActivo
 *               - laboratorio
 *               - proveedorId
 *               - fechaVencimiento
 *               - formaFarmaceutica
 *               - presentacion
 *               - lote
 *               - stock
 *             properties:
 *               nombre:
 *                 type: string
 *               principioActivo:
 *                 type: string
 *               laboratorio:
 *                 type: string
 *               proveedorId:
 *                 type: integer
 *               fechaVencimiento:
 *                 type: string
 *                 format: date
 *               formaFarmaceutica:
 *                 type: string
 *               presentacion:
 *                 type: string
 *               lote:
 *                 type: string
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Medicamento creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error del servidor
 */
router.post('/', medicamento_controller_1.crearMedicamento);
/**
 * @swagger
 * /medicamentos/{id}:
 *   patch:
 *     summary: Actualizar un medicamento existente
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del medicamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               principioActivo:
 *                 type: string
 *               laboratorio:
 *                 type: string
 *               proveedorId:
 *                 type: integer
 *               fechaVencimiento:
 *                 type: string
 *                 format: date
 *               formaFarmaceutica:
 *                 type: string
 *               presentacion:
 *                 type: string
 *               lote:
 *                 type: string
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Medicamento actualizado correctamente
 *       404:
 *         description: Medicamento o proveedor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.patch('/:id', medicamento_controller_1.actualizarMedicamento);
/**
 * @swagger
 * /medicamentos/{id}:
 *   delete:
 *     summary: Eliminar un medicamento por ID
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del medicamento a eliminar
 *     responses:
 *       200:
 *         description: Medicamento eliminado correctamente
 *       404:
 *         description: Medicamento no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', medicamento_controller_1.eliminarMedicamento);
/**
 * @swagger
 * /medicamentos:
 *   get:
 *     summary: Obtener todos los medicamentos
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de medicamentos encontrada
 *       404:
 *         description: No se encontraron medicamentos
 *       500:
 *         description: Error del servidor
 */
router.get('/', medicamento_controller_1.obtenerMedicamentos);
/**
 * @swagger
 * /medicamentos/buscar:
 *   get:
 *     summary: Buscar medicamentos por nombre, principio activo o laboratorio
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: principioActivo
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: laboratorio
 *         schema:
 *           type: string
 *         required: false
 *     responses:
 *       200:
 *         description: Lista de medicamentos encontrada
 *       404:
 *         description: No se encontraron medicamentos
 *       500:
 *         description: Error del servidor
 */
router.get('/buscar', medicamento_controller_1.buscarMedicamentos);
/**
 * @swagger
 * /medicamentos/vencimiento:
 *   get:
 *     summary: Obtener medicamentos ordenados por fecha de vencimiento (los próximos primero)
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de medicamentos ordenada por fecha de vencimiento
 *       404:
 *         description: No se encontraron medicamentos
 *       500:
 *         description: Error del servidor
 */
router.get('/vencimiento', medicamento_controller_1.obtenerMedicamentosProximosAVencer);
/**
 * @swagger
 * /medicamentos/lote:
 *   post:
 *     summary: Cargar un lote de medicamentos desde un archivo Excel
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *               - proveedorId
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Archivo Excel con los datos de medicamentos
 *               proveedorId:
 *                 type: integer
 *                 description: ID del proveedor asociado
 *     responses:
 *       201:
 *         description: Lote cargado exitosamente
 *       400:
 *         description: Datos faltantes
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error del servidor
 */
router.post('/lote', upload_1.upload.single('file'), medicamento_controller_1.cargarLoteMedicamentos);
/**
 * @swagger
 * /medicamentos/formas-farmaceuticas:
 *   get:
 *     summary: Obtener todas las formas farmacéuticas disponibles
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de formas farmacéuticas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/formas-farmaceuticas', medicamento_controller_1.obtenerFormasFarmaceuticas);
/**
 * @swagger
 * /medicamentos/presentaciones:
 *   get:
 *     summary: Obtener todas las presentaciones disponibles
 *     tags: [Medicamentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de presentaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/presentaciones', medicamento_controller_1.obtenerPresentaciones);
exports.default = router;
