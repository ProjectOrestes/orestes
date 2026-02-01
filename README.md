# Orestes

Orestes es un proyecto web en desarrollo creado de forma colaborativa, con arquitectura full-stack moderna y basada en tecnologías JavaScript.

El objetivo principal del proyecto es construir una aplicación web capaz de almacenar, gestionar y consultar datos de forma eficiente, separando claramente frontend, backend y base de datos, para mayor seguridad y orden durante el desarrollo.

---

🧱 Arquitectura general

La aplicación sigue una arquitectura cliente-servidor:

React (Frontend) → HTTP (JSON) → Express (Backend) → Prisma → PostgreSQL (Database)

---

🎨 Frontend

Tecnologías:

• React
• JavaScript (JS / JSX)
• CSS
• Vite
• Node.js
• npm

Responsabilidades:

• Renderizar la interfaz de usuario
• Manejar estados y vistas
• Consumir la API del backend mediante HTTP (fetch / axios)

---

🧠 Backend

Tecnologías:

• Node.js
• Express
• Prisma ORM
• dotenv
• nodemon (entorno de desarrollo)

Responsabilidades:

• Exponer una API REST
• Manejar la lógica de negocio
• Validar datos
• Comunicarse con la base de datos

---

🗄️ Base de datos

Tecnologías:

• PostgreSQL
• Prisma (modelado y migraciones)

Características:

• Base de datos relacional
• Modelos definidos en `schema.prisma`
• Migraciones versionadas
• Configuración mediante variables de entorno

---

📁 Estructura general del proyecto

orestes/ 

frontend/ # React + Vite

backend/         # Node + Express

---

⚙️ Configuración del entorno

Cada desarrollador debe contar con:

• Node.js
• PostgreSQL
• npm

Además, es necesario crear un archivo `.env` en el backend con las variables de entorno correspondientes.

⚠️ Los archivos `.env` no se incluyen en el repositorio por razones de seguridad.

---

🚧 Estado del proyecto:

🛠️ En desarrollo activo.

!Este README es provisorio y se irá actualizando a medida que el proyecto evolucione.

---

👥 Equipo

Proyecto desarrollado de forma colaborativa por el equipo de Project Orestes.
