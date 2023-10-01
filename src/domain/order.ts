import { Client } from "./client";
import { OrderProduct } from "./order-product";

type OrderProps = {
  id: string;
  client: Client;
  products: Array<OrderProduct>;
};

export class Order {
  public readonly id: string;
  public readonly client: Client;
  public readonly products: Array<OrderProduct>;

  private constructor(order: OrderProps) {
    this.id = order.id;
    this.client = order.client;
    this.products = order.products;
  }

  public calculateTotalOrderPrice() {
    const totalPriceByOrder = this.products.reduce((total, currentProduct) => {
      total += currentProduct.calculateOrderPrice();

      return total;
    }, 0);

    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalPriceByOrder);
  }

  public static create(order: OrderProps): Order {
    return new Order(order);
  }
}
