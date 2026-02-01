// Este archivo no toca Prisma directamente.
// Solamente recibe request, valida mínimamente y responde HTTP.

import * as productosService from "../services/productos.service.js";
import { idParamSchema } from "../schemas/common.schema.js";
import {
  createProductoSchema,
  updateProductoSchema,
  productoIdParamSchema,
} from "../schemas/productos.schema.js";
import { productosQuerySchema } from "../schemas/productos.schema.js";

export const getProductos = async (req, res) => {
  const query = productosQuerySchema.parse(req.query);
  const result = await productosService.getAllProductos(query);
  res.json(result);
};

export const getProducto = async (req, res) => {
  const { id } = idParamSchema.parse(req.params);
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

export const updateProducto = async (req, res) => {
  const { id } = productoIdParamSchema.parse(req.params); //params
  const data = updateProductoSchema.parse(req.body); //body
  const producto = await productosService.updateProducto(id, data);

  res.json(producto);
};

export const deleteProducto = async (req, res) => {
  const { id } = productoIdParamSchema.parse(req.params);
  const producto = await productosService.deleteProducto(id);
  res.json(producto);
};

export const restoreProducto = async (req, res) => {
  const { id } = idParamSchema.parse(req.params);

  const producto = await productosService.restoreProducto(id);

  if (!producto) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(producto);
};
