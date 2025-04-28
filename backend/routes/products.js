import express from "express";
import sequelize from "../config/connect-mysql.js";
import Products from "../models/Products.js";
import { ProductsValidation } from "../lib/validations/Valid-products.js";
import ProductImages from "../models/Product_images.js";
import { handle } from "../lib/validations/HandleErrors.js";

const router = express.Router();

//produkto kurimas
router.post("/", async (req, res) => {
  try {
    const { name, price, description, category_id, image_url } = req.body;

    const product = await Products.create({
      name,
      price,
      description,
      category_id,
      image_url,
    });

    if (image_url) {
      await ProductImages.create({
        product_id: product.id, // paveiksliuko susiejimas su produktu
        image_url: image_url,
      });
    }

    res.status(201).json(product);
  } catch (err) {
    console.error("Product creation error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//produktu gavimas
router.get("/", async (req, res) => {
  try {
    const allProducts = await Products.findAll({
      include: [ProductImages],
      order: [["id", "DESC"]],
    });
    res.status(200).json(allProducts);
  } catch (err) {
    console.error("❌ GET /api/products error:", err);
    res.status(500).json({ message: "Internal server error occured" });
  }
});

//produkto gavimas pagal id
router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findByPk(req.params.id, {
      include: [{ model: ProductImages }],
    });
    if (!product) return res.status(404).json({ message: "Not found" });
    res.status(200).json(product);
  } catch (err) {
    handle(err, res);
  }
});

//produkto atnaujinimas
router.put("/:id", async (req, res) => {
  try {
    const validatedData = ProductsValidation.parse(req.body);
    const product = await Products.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });

    await product.update(validatedData);
    res.status(200).json(product);
  } catch (err) {
    handle(err, res);
  }
});

//produkto istrinimas
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await ProductImages.destroy({
      where: { product_id: id },
    });

    const deletedCount = await Products.destroy({
      where: { id: req.params.id },
    });
    if (deletedCount === 0)
      return res.status(404).json({ message: "Not found" });
    res.status(204).end();
  } catch (err) {
    console.error("Failed to delete product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
