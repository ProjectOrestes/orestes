import prisma from "../config/prisma.js";

export const getValorInventarioData = async () => {
  const productos = await prisma.producto.findMany({
    where: { activo: true },
    select: { precio: true, stock: true }
  });

  // Prisma 7 devuelve Decimal; lo convertimos a número para el cálculo
  const total = productos.reduce((acc, p) => acc + (Number(p.precio) * p.stock), 0);
  return { valorTotal: total };
};

export const getStockBajoData = async () => {
  return await prisma.producto.findMany({
    where: {
      activo: true,
      stock: { lte: 5 } // O ajustalo según el criterio de tu equipo
    }
  });
};