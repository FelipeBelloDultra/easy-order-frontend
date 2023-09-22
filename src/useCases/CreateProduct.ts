import { httpClient } from "~/infra/http/HttpClient";

class CreateProduct {
  public async execute({
    name,
    price,
    description,
  }: {
    name: string;
    price: number;
    description: string;
  }) {
    await httpClient.post("/products", { name, price, description });
  }
}

export const createProduct = new CreateProduct();
