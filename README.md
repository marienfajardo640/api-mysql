# API MySQL - Proyecto Final

Esta API fue desarrollada con **Node.js**, **Express** y **MySQL**.  
Permite realizar operaciones CRUD sobre la tabla `usuarios`.

---

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/api-usuarios.git
cd api-usuarios
npm install
DB_HOST=localhost
DB_USER=root
DB_PASS=tu_contraseña
DB_NAME=prueba
PORT=3000
npx nodemon src/index.js
http://localhost:3000/usuarios
[
  {
    "id": 1,
    "nombre": "Marien Fajardo",
    "correo": "marien@example.com"
  },
  {
    "id": 2,
    "nombre": "Juan Perez",
    "correo": "juan@example.com"
  }
]
{
  "nombre": "Nuevo Usuario",
  "correo": "nuevo@example.com"
}
{ "message": "Usuario creado correctamente" }
{
  "nombre": "Nombre Actualizado",
  "correo": "actualizado@example.com"
}
{ "message": "Usuario actualizado correctamente" }
{ "message": "Usuario eliminado correctamente" }

