import { Http } from "~/infra/http-client";

import { Order } from "~/domain/order";
import { Client } from "~/domain/client";
import { Product } from "~/domain/product";
import { OrderProduct } from "~/domain/order-product";

interface RequestOutput {
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
}

interface LoadOrdersOutput {
  total: number;
  orders: Array<Order>;
}

export async function loadOrdersService(): Promise<LoadOrdersOutput> {
  const { total, result } = await Http.get<RequestOutput>("/orders");

  const orders = {
    total,
    orders: result.map((order) =>
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
