import * as reportesService from "../services/reportes.service.js";

export const getValorInventario = async (req, res, next) => {
  try {
    const result = await reportesService.getValorInventarioData();
    res.json(result);
  } catch (error) {
    next(error); // Esto lo envía a tu nuevo error.middleware.js
  }
};

export const getStockBajo = async (req, res, next) => {
  try {
    const productos = await reportesService.getStockBajoData();
    res.json(productos);
  } catch (error) {
    next(error);
  }
};