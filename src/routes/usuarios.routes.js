import { Router } from "express";
import { db } from "../config/db.js";

const router = Router();

// 🔹 Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// 🔹 Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    await db.query("INSERT INTO usuarios (nombre, correo) VALUES (?, ?)", [nombre, correo]);
    res.json({ message: "Usuario creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
});

// 🔹 Actualizar un usuario
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo } = req.body;
    await db.query("UPDATE usuarios SET nombre=?, correo=? WHERE id=?", [nombre, correo, id]);
    res.json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
});

// 🔹 Eliminar un usuario
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM usuarios WHERE id=?", [id]);
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
});

export default router;

