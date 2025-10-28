import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let db;

try {
  db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  console.log("✅ Conectado a MySQL");
} catch (error) {
  console.error("❌ Error al conectar a MySQL:", error);
}

export { db };


