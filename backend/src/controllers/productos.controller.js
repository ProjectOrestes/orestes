//este archivo no toca Prisma directamente. Solamente recibe request, valida mínimamente y responde HTTP.

import * as productosService from "../services/productos.service.js";

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

export const createProducto = async (req, res) => {
  const producto = await productosService.createProducto(req.body);
  res.status(201).json(producto);
};

export const updateProducto = async (req, res) => {
  const id = Number(req.params.id);
  const producto = await productosService.updateProducto(id, req.body);
  res.json(producto);
};

export const deleteProducto = async (req, res) => {
  const id = Number(req.params.id);
  await productosService.deleteProducto(id);
  res.status(204).send();
};
