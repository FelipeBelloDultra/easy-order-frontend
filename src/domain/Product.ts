interface IProduct {
  price: number;
  description: string;
  name: string;
  id: string;
}

// Rename to product order
export class Product {
  public price: number;
  public description: string;
  public name: string;
  public id: string;

  private constructor(product: IProduct) {
    this.description = product.description;
    this.name = product.name;
    this.price = product.price;
    this.id = product.id;
  }

  public centsToReal(): number {
    return this.price / 100;
  }

  public get formattedPrice(): string {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.centsToReal());
  }

  static create(product: IProduct): Product {
    return new Product(product);
  }
}
