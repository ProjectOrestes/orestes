//Acá vive TODA la lógica de la DB

import prisma from "../config/prisma.js";

export const getAllProductos = async ({
  page,
  limit,
  search,
  activo,
}) => {
  const skip = (page - 1) * limit;

  const where = {
    ...(activo !== undefined && { activo }),
    ...(search && {
      nombre: {
        contains: search,
        mode: "insensitive",
      },
    }),
  };

  const [data, total] = await Promise.all([
    prisma.producto.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.producto.count({ where }),
  ]);

  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    data,
  };
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
  const producto = await prisma.producto.findUnique({
    where: { id },
  });

  if (!producto) {
    const error = new Error("Producto no encontrado");
    error.status = 404;
    throw error;
  }

  if (!producto.activo) {
    const error = new Error("Producto ya está desactivado");
    error.status = 409;
    throw error;
  }

  return prisma.producto.update({
    where: { id },
    data: {
      activo: false,
    },
  });
};

export const restoreProducto = async (id) => {
  const producto = await prisma.producto.findUnique({
    where: { id },
  });

  if (!producto) return null;

  return prisma.producto.update({
    where: { id },
    data: { activo: true },
  });
};
