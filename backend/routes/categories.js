import express from "express";
import connection from "../config/connect-mysql.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM categories");
    res.json(rows);
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    res.status(500).json({ message: "Server error fetching categories" });
  }
});

export default router;
