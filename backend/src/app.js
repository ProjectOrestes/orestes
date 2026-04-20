import express from "express"; 
import cors from "cors"; 

// Imports de las rutas
import productosRoutes from "./routes/productos.routes.js";
import reportesRoutes from "./routes/reportes.routes.js"; // <-- Descomentado
import dashboardRoutes from "./routes/dashboard.routes.js"; // <-- Descomentado
// import authRoutes from "./routes/auth.routes.js";

import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.get("/api/health", (req, res) => { 
  res.json({ status: "ok" });  
});

// Rutas de la API activadas
app.use("/api/productos", productosRoutes);
app.use("/api/reportes", reportesRoutes); // <-- Activado
app.use("/api/dashboard", dashboardRoutes); // <-- Activado
// app.use("/api/auth", authRoutes);

app.use(errorMiddleware);

export default app;
