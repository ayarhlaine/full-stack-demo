import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import ProductService from "../services/products/product.service";

@injectable()
class ProductController {
  constructor(@inject(ProductService) private productService: ProductService) {}

  index = (req: Request, res: Response): void => {
    const data = this.productService.getProducts();
    res.json({
      message: "ok",
      data,
    });
  };
}

export default ProductController;
