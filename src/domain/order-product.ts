import { Product } from "./product";

type OrderProductsProps = {
  quantity: number;
  product: Product;
};

export class OrderProduct {
  public readonly quantity: number;
  public readonly product: Product;

  private constructor(orderProduct: OrderProductsProps) {
    this.product = orderProduct.product;
    this.quantity = orderProduct.quantity;
  }

  public static create(orderProduct: OrderProductsProps): OrderProduct {
    return new OrderProduct(orderProduct);
  }

  public calculateOrderPrice(): number {
    return this.product.price * this.quantity;
  }

  public get getFormattedOrderPrice(): string {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.calculateOrderPrice());
  }
}
