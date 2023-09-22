import { httpClient } from "~/infra/http/HttpClient";

class CreateOrder {
  public async execute({
    client,
    products,
  }: {
    client: {
      id?: string;
      name: string;
      document: string;
    };
    products: Array<{ id: string; quantity: number }>;
  }) {
    await httpClient.post("/orders", { client, products });
  }
}

export const createOrder = new CreateOrder();
