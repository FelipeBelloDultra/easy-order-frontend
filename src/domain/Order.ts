import { Client } from "./Client";
import { Product } from "./Product";

export type IOrderProducts = Array<{
  product: Product;
  quantity: number;
  price: number;
}>;

interface IOrder {
  id: string;
  client: Client;
  products: IOrderProducts;
}

export class Order {
  private order: IOrder;

  private constructor(order: IOrder) {
    this.order = order;
  }

  public get id(): string {
    return this.order.id;
  }

  public get client(): Client {
    return this.order.client;
  }

  public get products(): IOrderProducts {
    return this.order.products;
  }

  public calculateOrderPrice(): string {
    const totalPriceByProduct = this.order.products.reduce(
      (totalPrice, currentProduct) => {
        return (
          totalPrice +
          currentProduct.product.centsToReal() * currentProduct.quantity
        );
      },
      0
    );

    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalPriceByProduct);
  }

  public addProduct(product: Product, quantity: number, price: number): void {
    this.order.products.push({ product, quantity, price });
  }

  static create(order: IOrder): Order {
    return new Order(order);
  }
}
