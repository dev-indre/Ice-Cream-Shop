import express from "express";
import connection from "../config/connect-mysql.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("Klaida gaunant produktus:", err);
    res.status(500).json({ error: "Serverio klaida" });
  }
});

export default router;
