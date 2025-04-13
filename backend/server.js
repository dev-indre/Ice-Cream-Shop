import express from "express";
import productRoutes from "./routes/products.js";
import { createProxyMiddleware } from "http-proxy-middleware";
import "./config/connect-mysql.js";

const app = express();
app.use(express.json());
const proxyMiddleware = createProxyMiddleware({
  target: "http://localhost:5173/",
  changeOrigin: true,
  ws: true,
});
app.use("/products", productRoutes);
app.use("/", proxyMiddleware);
app.listen(3001, () => console.log("Serveris veikia"));
