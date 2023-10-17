import { Router } from "express";
import { container } from "tsyringe";

import ProductController from "./product.controller";

const router = Router();

// Controllers
const productController = container.resolve(ProductController);
router.get("/products", productController.index);

export default router;
