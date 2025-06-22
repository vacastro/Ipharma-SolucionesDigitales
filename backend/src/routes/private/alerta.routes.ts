import express from 'express';
import { obtenerAlertasStock } from '../../controllers/alerta.controllers';

const router = express.Router();

router.get('/stock', obtenerAlertasStock);

export default router;
