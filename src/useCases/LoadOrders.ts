import { httpClient } from "~/infra/http/HttpClient";
import { Client } from "~/domain/Client";
import { Order } from "~/domain/Order";
import { Product } from "~/domain/Product";

interface IOrders {
  orders: Array<{
    _id: string;
    client: {
      _id: string;
      name: string;
      document: string;
    };
    products: Array<{
      quantity: number;
      product: {
        _id: string;
        name: string;
        description: string;
        price: number;
      };
    }>;
  }>;
}

class LoadOrders {
  public async execute() {
    const { orders } = await httpClient.get<IOrders>("/orders");

    const toReturn = orders.map((order) =>
      Order.create({
        id: order._id,
        client: Client.create({
          id: order.client._id,
          name: order.client.name,
          document: order.client.document,
        }),
        products: order.products.map((product) => ({
          quantity: product.quantity,
          product: Product.create({
            id: product.product._id,
            name: product.product.name,
            description: product.product.description,
            price: product.product.price,
          }),
        })),
      })
    );

    return toReturn;
  }
}

export const loadOrders = new LoadOrders();
