import { Router } from "express";
import {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
  restoreProducto
} from "../controllers/productos.controller.js";

const router = Router();

router.get("/", getProductos);
router.get("/:id", getProducto);
router.post("/", createProducto);
router.patch("/:id", updateProducto);
router.patch("/:id/restore", restoreProducto);
router.delete("/:id", deleteProducto);

export default router;
