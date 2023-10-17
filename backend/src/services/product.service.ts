import { injectable } from "tsyringe";

@injectable()
class ProductService {
  getData(): string {
    return "Data from ProductService";
  }
}

export default ProductService;
