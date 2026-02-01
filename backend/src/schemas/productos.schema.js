import { z } from "zod";

export const createProductoSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  descripcion: z.string().optional(),
  precio: z.number().positive(),
  stock: z.number().int().nonnegative(),
  stockMinimo: z.number().int().nonnegative().optional(),
  activo: z.boolean().optional(),
});

export const updateProductoSchema = z
  .object({
    nombre: z.string().min(1).optional(),
    descripcion: z.string().optional(),
    precio: z.number().positive().optional(),
    stock: z.number().int().nonnegative().optional(),
    stockMinimo: z.number().int().nonnegative().optional(),
    activo: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Debe enviar al menos un campo para actualizar",
  });

export const productoIdParamSchema = z.object({
  id: z.coerce
    .number()
    .int()
    .positive("El id debe ser un número entero positivo"),
});
