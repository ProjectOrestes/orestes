// Este archivo no toca Prisma directamente.
// Solamente recibe request, valida mínimamente y responde HTTP.

import * as productosService from "../services/productos.service.js";
import {
  createProductoSchema,
  updateProductoSchema,
} from "../schemas/productos.schema.js";

export const getProductos = async (req, res) => {
  const productos = await productosService.getAllProductos();
  res.json(productos);
};

export const getProducto = async (req, res) => {
  const id = Number(req.params.id);
  const producto = await productosService.getProductoById(id);

  if (!producto) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(producto);
};

export const createProducto = async (req, res, next) => {
  try {
    const data = createProductoSchema.parse(req.body);
    const producto = await productosService.createProducto(data);
    res.status(201).json(producto);
  } catch (error) {
    next(error);
  }
};

export const updateProducto = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const data = updateProductoSchema.parse(req.body);
    const producto = await productosService.updateProducto(id, data);
    res.json(producto);
  } catch (error) {
    next(error);
  }
};

export const deleteProducto = async (req, res) => {
  const id = Number(req.params.id);
  await productosService.deleteProducto(id);
  res.status(204).send();
};
