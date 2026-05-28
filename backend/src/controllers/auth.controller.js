import { PrismaClient } from '@prisma/client';
// Importa bcrypt si vas a encriptar contraseñas (recomendado)
// import jwt from 'jsonwebtoken'; 

const prisma = new PrismaClient();

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Buscar el usuario en la DB
    const user = await prisma.user.findUnique({
      where: { email: email }
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // 2. Verificar la contraseña 
    // (Por ahora comparamos texto plano, luego deberías usar bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // 3. Responder con éxito (Aquí luego enviaremos el Token)
    res.status(200).json({
      message: "Login exitoso",
      user: { id: user.id, email: user.email, name: user.name }
    });

  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};