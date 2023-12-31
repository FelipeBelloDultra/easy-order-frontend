import { Http } from "~/infra/http-client";

import { Order } from "~/domain/order";
import { Client } from "~/domain/client";
import { Product } from "~/domain/product";
import { OrderProduct } from "~/domain/order-product";

interface RequestOutput {
  data: {
    total: number;
    result: Array<{
      id: string;
      client: {
        id: string;
        document: string;
        name: string;
      };
      products: Array<{
        quantity: 1;
        product: {
          id: string;
          name: string;
          description?: string;
          price: number;
        };
      }>;
    }>;
  };
}

interface LoadOrdersOutput {
  total: number;
  orders: Array<Order>;
}

interface LoadOrdersParams {
  limit?: number;
  page?: number;
}

export async function loadOrdersService({
  limit = 10,
  page = 1,
}: LoadOrdersParams): Promise<LoadOrdersOutput> {
  const { data } = await Http.get<RequestOutput>(
    `/orders?page=${page}&limit=${limit}`
  );

  const orders = {
    total: data.total,
    orders: data.result.map((order) =>
      Order.create({
        id: order.id,
        client: Client.create({
          id: order.client.id,
          name: order.client.name,
          document: order.client.document,
        }),
        products: order.products.map((product) =>
          OrderProduct.create({
            product: Product.create({
              id: product.product.id,
              name: product.product.name,
              price: product.product.price,
              description: product.product.description,
            }),
            quantity: product.quantity,
          })
        ),
      })
    ),
  };

  return orders;
}
