import { Router } from 'express';
import authRoutes from './public/auth.routes';
import userRoutes from './private/users.routes';
import { authMiddleware } from '../middlewares/authMiddleware';
import proveedorRoutes from './private/proveedor.routes';
import medicamentoRoutes from './private/medicamento.routes';
import perfilRoutes from './public/usuarios.routes';

const router = Router();

// Rutas públicas
router.use('/auth', authRoutes);
router.use('/users', perfilRoutes);


// Rutas privadas (requieren autenticación)
router.use('/users', authMiddleware, userRoutes);
router.use('/proveedores', proveedorRoutes);
router.use('/medicamentos', medicamentoRoutes);

export default router;