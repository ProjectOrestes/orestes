<p align="center">
  <img src="frontend/public/assets/main/orestes.svg" width="200" alt="Penta">
</p>

###### **Orestes** es una plataforma web full-stack en desarrollo, construida con una arquitectura moderna y escalable. El proyecto se centra en la gestión eficiente de datos, manteniendo una separación estricta entre el cliente y el servidor para garantizar un desarrollo colaborativo ordenado.

---

### 🧱 Arquitectura del Sistema
La aplicación utiliza un modelo **cliente-servidor** con comunicación mediante JSON:

`React (Frontend)` ↔ `Express (API)` ↔ `Prisma (ORM)` ↔ `PostgreSQL (DB)`

---

### 🛠️ Stack Tecnológico

| Componente | Tecnologías |
| :--- | :--- |
| **Frontend** | React, Vite, CSS, JavaScript (JSX) |
| **Backend** | Node.js, Express, Prisma ORM |
| **Base de Datos** | PostgreSQL |
| **Herramientas** | Dotenv, Nodemon, npm |

---

### 📂 Estructura del Proyecto
Representación de la raíz y carpetas principales:

```text
orestes/
├── frontend/          # Aplicación React + Vite
│   ├── public/        # Assets y recursos estáticos
│   └── src/           # Componentes y lógica de UI
├── backend/           # API REST con Node + Express
│   ├── prisma/        # Modelado de datos y migraciones
│   └── .env.example   # Plantilla de configuración
└── README.md
```
---

### ⚙️ Configuración del Entorno

Para trabajar en este proyecto, cada desarrollador debe contar con:

1. **Requisitos previos:** Node.js, PostgreSQL y npm instalados.
2. **Variables de Entorno:** * Es necesario crear un archivo `.env` dentro de la carpeta `backend/`.
   * Configurar la URL de conexión a la base de datos y puertos según corresponda.
3. **Instalación de dependencias:**

```bash
# En la raíz del proyecto, instalar ambos entornos
cd frontend && npm install
cd ../backend && npm install
```

>[!WARNING]
>Los archivos `.env` contienen credenciales sensibles y nunca deben incluirse en el repositorio por razones de seguridad

---

### 🚧 Estado del Proyecto:

Actualmente el proyecto se encuentra en **fase de desarrollo activo**. Estamos trabajando en la implementación de las funcionalidades base y la estabilización de la API.

---

### 👥 Equipo

Proyecto desarrollado de forma colaborativa por el equipo de Caudex.

>[!NOTE]
>Este README es provisorio y se irá actualizando a medida que el proyecto evolucione.
