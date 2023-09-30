import { Product } from "~/domain/Product";
import { httpClient } from "~/infra/http/HttpClient";

class LoadProducts {
  public async execute() {
    const { products } = await httpClient.get<{
      products: [
        { description: string; id: string; name: string; price: number }
      ];
    }>("/products");

    return products.map((product) =>
      Product.create({
        id: product.id,
        description: product.description,
        price: product.price,
        name: product.name,
      })
    );
  }
}

export const loadProducts = new LoadProducts();
