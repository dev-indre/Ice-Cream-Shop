import express from "express";
import sequelize from "../config/connect-mysql.js";
import { CategoriesValidation } from "../lib/validations/Valid-categories.js";
import Categories from "../models/Categories.js";
import { handle } from "../lib/validations/HandleErrors.js";

const router = express.Router();

//kategoriju kurimas
router.post("/", async (req, res) => {
  try {
    const validatedData = CategoriesValidation.parse(req.body);
    const category = await Categories.create(validatedData);
    return res.status(201).json({
      category: category.toJSON(),
    });
  } catch (err) {
    handle(err, res);
  }
});

//kategoriju gavimas
router.get("/", async (req, res) => {
  try {
    const allCategories = await Categories.findAll();
    res.status(200).json(allCategories);
  } catch (err) {
    handle(err, res);
  }
});

//vienos kategorijos gavimas
router.get("/:id", async (req, res) => {
  try {
    const category = await Categories.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "Not found" });
    res.status(200).json(category);
  } catch (err) {
    handle(err, res);
  }
});

//atnaujinti:
router.put("/:id", async (req, res) => {
  try {
    const validatedData = CategoriesValidation.parse(req.body);
    const category = await Categories.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "Not found" });

    await category.update(validatedData);
    res.status(200).json(category);
  } catch (err) {
    handle(err, res);
  }
});

//istrinti
router.delete("/:id", async (req, res) => {
  try {
    const deletedCount = await Categories.destroy({
      where: { id: req.params.id },
    });
    if (deletedCount === 0)
      return res.status(404).json({ message: "Not found" });
    res.status(204).end();
  } catch (err) {
    handle(err, res);
  }
});

export default router;
