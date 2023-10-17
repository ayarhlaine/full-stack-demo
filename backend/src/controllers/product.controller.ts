import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import ProductService from "../services/product.service";

@injectable()
class ProductController {
  constructor(@inject(ProductService) private productService: ProductService) {}

  index = (req: Request, res: Response): void => {
    const data = this.productService.getData();
    res.send(`Data from ProductController: ${data}`);
  };
}

export default ProductController;
