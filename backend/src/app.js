import express from "express"; //framework a usar para crear servidores y rutas
import cors from "cors"; //permite la comunicacion entre el front y el back

const app = express(); //app define rutas, configura middlewares y maneja requests y responses

app.use(cors()); //middleware global (habilita requests desde otros origenes)
app.use(express.json()); //le dice a express que al llegar una request con JSON, se lo pase automáticamente

app.get("/api/health", (req, res) => { //define una ruta con metodo GET y endpoint /api/health
  res.json({ status: "ok" });  //devuelve una respuesta JSON al cliente
});

export default app;
