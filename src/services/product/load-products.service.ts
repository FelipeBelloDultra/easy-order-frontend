import { Http } from "~/infra/http-client";

import { Product } from "~/domain/product";

interface RequestOutput {
  data: {
    total: number;
    result: Array<{
      id: string;
      price: number;
      description?: string;
      name: string;
    }>;
  };
}

interface LoadProductsOutput {
  total: number;
  products: Array<Product>;
}

interface LoadProductsParams {
  limit?: number;
  page?: number;
}

export async function loadProductsService({
  limit = 10,
  page = 1,
}: LoadProductsParams): Promise<LoadProductsOutput> {
  const { data } = await Http.get<RequestOutput>(
    `/products?page=${page}&limit=${limit}`
  );

  const products = {
    total: data.total,
    products: data.result.map((product) =>
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
