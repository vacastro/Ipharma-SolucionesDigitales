import { Router } from 'express';
import { loginUser, registerUser } from '../../controllers/auth.controllers';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Endpoints de login y registro de usuarios
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - clave
 *             properties:
 *               email:
 *                 type: string
 *               clave:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Autenticación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/login', loginUser);
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *               - clave
 *               - perfil
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               clave:
 *                 type: string
 *                 format: password
 *               perfil:
 *                 type: string
 *                 enum: [farmaceutico, administrativo]
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos inválidos
 */


router.post('/register', registerUser);

export default router;