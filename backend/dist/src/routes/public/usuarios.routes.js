"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../../controllers/users.controllers");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   email:
 *                     type: string
 *                   perfil:
 *                     type: string
 *                     enum: [farmaceutico, administrativo]
 *                   activo:
 *                     type: boolean
 *       500:
 *         description: Error del servidor
 */
router.get('/', users_controllers_1.getUsers);
/**
 * @swagger
 * /users/perfiles/opciones:
 *   get:
 *     summary: Obtener los perfiles disponibles para los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de perfiles disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 enum: [farmaceutico, administrativo]
 */
router.get('/perfiles/opciones', users_controllers_1.obtenerPerfiles);
exports.default = router;
