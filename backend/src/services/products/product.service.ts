import { injectable } from "tsyringe";
import { Products } from "./product.data";
import { Product } from "./product.interface";

@injectable()
export class ProductService {
  getProducts(): Product[] {
    return Products;
  }
}

export default ProductService;
