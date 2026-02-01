import { Router } from "express";
import {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
} from "../controllers/productos.controller.js";
import * as productosController from "../controllers/productos.controller.js";

const router = Router();

router.get("/", getProductos);
router.get("/:id", getProducto);
router.post("/", createProducto);
router.patch("/:id/restore", productosController.restoreProducto);
router.delete("/:id", deleteProducto);

export default router;
