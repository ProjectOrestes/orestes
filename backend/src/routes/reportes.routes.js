import { Router } from 'express';
import { getValorInventario, getStockBajo } from '../controllers/reportes.controller.js';

const router = Router();

router.get('/valor-inventario', getValorInventario);
router.get('/stock-bajo', getStockBajo);

export default router;