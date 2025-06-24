import express from 'express';
import { registrarVentaMedicamento } from '../../controllers/ventas.controller';

const router = express.Router();


/**
 * @swagger
 * /ventas/medicamento:
 *   post:
 *     summary: Registrar una venta de medicamento
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - medicamentoId
 *               - cantidad
 *             properties:
 *               medicamentoId:
 *                 type: integer
 *                 description: ID del medicamento vendido
 *               cantidad:
 *                 type: integer
 *                 description: Cantidad vendida del medicamento
 *     responses:
 *       200:
 *         description: Venta registrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                 nuevoStock:
 *                   type: integer
 *       400:
 *         description: Datos faltantes o inválidos
 *       500:
 *         description: Error del servidor al procesar la venta
 */
router.post('/medicamento', registrarVentaMedicamento);


export default router;
