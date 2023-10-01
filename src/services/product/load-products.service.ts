import { Http } from "~/infra/http-client";

import { Product } from "~/domain/product";

interface RequestOutput {
  total: number;
  result: Array<{
    id: string;
    price: number;
    description?: string;
    name: string;
  }>;
}

interface LoadProductsOutput {
  total: number;
  products: Array<Product>;
}

export async function loadProductsService(): Promise<LoadProductsOutput> {
  const { total, result } = await Http.get<RequestOutput>("/products");

  const products = {
    total,
    products: result.map((product) =>
      Product.create({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
      })
    ),
  };

  return products;
}