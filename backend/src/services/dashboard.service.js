import prisma from "../config/prisma.js";

export const getDashboardSummaryData = async () => {
  // Usamos $transaction para que sea una sola operación atómica
  const [totalProductos, stockBajoCount] = await prisma.$transaction([
    prisma.producto.count({ where: { activo: true } }),
    prisma.producto.count({ 
      where: { activo: true, stock: { lte: 5 } } 
    })
  ]);

  return {
    totalProductos,
    alertasStock: stockBajoCount,
    fechaActualizacion: new Date()
  };
};