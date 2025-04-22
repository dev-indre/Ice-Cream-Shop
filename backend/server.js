import express from "express";
import productRoutes from "./routes/products.js";
import { createProxyMiddleware } from "http-proxy-middleware";
import "./config/connect-mysql.js";
import categoryRoutes from "./routes/categories.js";

const app = express();
app.use(express.json());
const proxyMiddleware = createProxyMiddleware({
  target: "http://localhost:5174/",
  changeOrigin: true,
  ws: true,
});
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/", proxyMiddleware);
app.listen(3001, () => console.log("Serveris veikia"));
