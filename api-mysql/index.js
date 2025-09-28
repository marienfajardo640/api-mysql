
import express from "express";
import mysql from "mysql2";

const app = express();


const db = mysql.createConnection({
  host: "localhost",
  user: "ADMIN",    
  password: "123456",
  database: "prueba"
});


db.connect(err => {
  if (err) {
    console.error("❌ Error de conexión:", err);
    return;
  }
  console.log("✅ Conectado a MySQL!");
});

app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});


app.listen(3000, () => {
  console.log("🌐 Servidor corriendo en http://localhost:3000");
});

