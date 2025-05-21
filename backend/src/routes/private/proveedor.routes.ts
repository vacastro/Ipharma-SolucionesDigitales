import { Router } from 'express';
import { crearProveedor, obtenerProveedores, updateProveedor, eliminarProveedor } from '../../controllers/proveedor.controller';

const router = Router();

/**
 * @swagger
 * /proveedores:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Proveedores]
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
 *               - direccion
 *               - telefono
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               telefono:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Proveedor creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', crearProveedor);
/**
 * 
 * /**
 * @swagger
 * /proveedores:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de proveedores encontrada
 *       404:
 *         description: No se encontraron proveedores
 *       500:
 *         description: Error del servidor
 */
router.get('/', obtenerProveedores);

/**
 * @swagger
 * /proveedores/{id}:
 *   patch:
 *     summary: Actualizar un proveedor existente
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               telefono:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Proveedor actualizado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error del servidor
 */
router.patch('/:id', updateProveedor);


/**
 * @swagger
 * /proveedores/{id}:
 *   delete:
 *     summary: Eliminar un proveedor por ID
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor a eliminar
 *     responses:
 *       200:
 *         description: Proveedor eliminado correctamente
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/:id', eliminarProveedor);



export default router;
