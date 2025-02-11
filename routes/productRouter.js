import express from "express";
import { getProducts, createProduct, deleteProduct, getProductByName } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.post("/", createProduct);
productRouter.delete("/:name", deleteProduct);

productRouter.get("/:name", getProductByName);

export default productRouter;