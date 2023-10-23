import { Products } from "./product.data";
import ProductService from "./product.service";

describe("Product Service", () => {
    let subject: ProductService;

    beforeEach(() => {
        subject = new ProductService();
    });

    describe("getProducts", () => {
        it('returns all products', () => {
            const actual = subject.getProducts();
            const expected = Products;
            expect(actual).toBe(expected);
        });
    });
});