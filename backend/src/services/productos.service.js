//Acá vive TODA la lógica de la DB

import prisma from "../config/prisma.js";

export const getAllProductos = async () => {
  return prisma.producto.findMany({
    where: { activo: true },
    orderBy: { createdAt: "desc" }
  });
};

export const getProductoById = async (id) => {
  return prisma.producto.findUnique({
    where: { id }
  });
};

export const createProducto = async (data) => {
  return prisma.producto.create({
    data
  });
};

export const updateProducto = async (id, data) => {
  const producto = await prisma.producto.findUnique({
    where: { id },
  });

  if (!producto) {
    const error = new Error("Producto no encontrado");
    error.status = 404;
    throw error;
  }

  return prisma.producto.update({
    where: { id },
    data,
  });
};

export const deleteProducto = async (id) => {
  return prisma.producto.update({
    where: { id },
    data: { activo: false }
  });
};
