import express from "express"; //framework a usar para crear servidores y rutas
import cors from "cors"; //permite la comunicacion entre el front y el back

//imports de las rutas, activas y en desarrollo
import productosRoutes from "./routes/productos.routes.js";
//import reportesRoutes from "./routes/reportes.routes.js";
//import dashboardRoutes from "./routes/dashboard.routes.js";
//import authRoutes from "./routes/auth.routes.js";

//import de middlewares
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express(); //app define rutas, configura middlewares y maneja requests y responses

app.use(cors()); //middleware global (habilita requests desde otros origenes)
app.use(express.json()); //le dice a express que al llegar una request con JSON, se lo pase automáticamente

app.get("/api/health", (req, res) => { //define una ruta con metodo GET y endpoint /api/health
  res.json({ status: "ok" });  //devuelve una respuesta JSON al cliente
});

//rutas de la API, activas y en desarrollo 
app.use("/api/productos", productosRoutes);
//app.use("/api/reportes", reportesRoutes);
//app.use("/api/dashboard", dashboardRoutes);
//app.use("/api/auth", authRoutes);

//definicion de middlewares
app.use(errorMiddleware);

export default app;
