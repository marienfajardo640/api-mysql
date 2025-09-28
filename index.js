
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

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "msql94",     
  password: "123456",  
  database: "prueba",  
});

db.connect((err) => {
  if (err) {
    console.error("Error de conexión a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL");
});


app.post("/usuarios", (req, res) => {
  const { nombre, correo } = req.body;
  db.query(
    "INSERT INTO usuarios (nombre, correo) VALUES (?, ?)",
    [nombre, correo],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, nombre, correo });
    }
  );
});


app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});


app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  db.query(
    "UPDATE usuarios SET nombre=?, correo=? WHERE id=?",
    [nombre, correo, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Usuario actualizado correctamente" });
    }
  );
});

app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM usuarios WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Usuario eliminado correctamente" });
  });
});


app.post("/productos", (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  db.query(
    "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)",
    [nombre, descripcion, precio, stock],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, nombre, descripcion, precio, stock });
    }
  );
});


app.get("/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});


app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;
  db.query(
    "UPDATE productos SET nombre=?, descripcion=?, precio=?, stock=? WHERE id=?",
    [nombre, descripcion, precio, stock, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Producto actualizado correctamente" });
    }
  );
});


app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM productos WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Producto eliminado correctamente" });
  });
});


app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
