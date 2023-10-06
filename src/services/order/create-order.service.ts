import { Http } from "~/infra/http-client";

interface CreateOrderData {
  client: {
    id: string;
  };
  products: Array<{
    id: string;
    quantity: number;
  }>;
}

export async function createOrderService({
  client,
  products,
}: CreateOrderData): Promise<void> {
  await Http.post<void, CreateOrderData>("/orders", { client, products });
}
