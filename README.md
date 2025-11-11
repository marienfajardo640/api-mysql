🧩 API MySQL – Proyecto Final

Esta API fue desarrollada con Node.js, Express y MySQL.
Permite realizar operaciones CRUD sobre usuarios.

🚀 Cómo ejecutar la API en local
1️⃣ Requisitos previos

Asegúrate de tener instalado:

Node.js
 (versión 16 o superior)

MySQL
 con tu base de datos configurada

2️⃣ Clonar el repositorio

Si estás usando GitHub:

git clone https://github.com/marienfajardo640/api-mysql.git
cd api-mysql

3️⃣ Instalar dependencias
npm install

4️⃣ Configurar variables de entorno

Crea un archivo llamado .env en la raíz del proyecto y agrega lo siguiente:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=prueba
PORT=3000

5️⃣ Iniciar el servidor

Para ejecutar la API:

npm start


Cuando veas este mensaje en la terminal:

Conectado a MySQL
Servidor corriendo en http://localhost:3000


significa que la API está funcionando correctamente ✅

📡 Endpoints disponibles
Método	Ruta	Descripción
GET	/usuarios	Lista todos los usuarios
POST	/usuarios	Crea un nuevo usuario
PUT	/usuarios/:id	Actualiza un usuario existente
DELETE	/usuarios/:id	Elimina un usuario
👩‍💻 Autor

Marien Andrea Fajardo Rodríguez

💬 Notas

Si aparece un error de conexión, revisa los datos del archivo .env.

Puedes cambiar el puerto en .env si el 3000 está ocupado.

Puedes probar los endpoints con Postman o directamente desde el navegador en
👉 http://localhost:3000/usuarios


