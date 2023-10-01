type ProductProps = {
  id: string;
  name: string;
  price: number;
  description?: string;
};

export class Product {
  public readonly id: string;
  public readonly name: string;
  public readonly price: number;
  public readonly description?: string;

  private constructor(product: ProductProps) {
    this.id = product.id;
    this.name = product.name;
    this.price = this.centsToReal(product.price);
    this.description = product.description;
  }

  public get getFormattedPrice(): string {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.price);
  }

  private centsToReal(value: number) {
    return value / 100;
  }

  public static create(product: ProductProps): Product {
    return new Product(product);
  }
}
