import { Router } from 'express';
import authRoutes from './public/auth.routes';
import userRoutes from './private/users.routes';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Rutas públicas
router.use('/auth', authRoutes);


// Rutas privadas (requieren autenticación)
router.use('/users', authMiddleware, userRoutes);

export default router;