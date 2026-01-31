import { z } from "zod";

export const createProductoSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  descripcion: z.string().optional(),
  precio: z.number().positive("El precio debe ser mayor a 0"),
  stock: z.number().int().min(0),
  stockMinimo: z.number().int().min(0).optional(),
});
