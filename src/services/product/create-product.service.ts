import { Http } from "~/infra/http-client";

interface CreateProducttData {
  name: string;
  description: string;
  price: number;
}

export async function createProductService({
  name,
  description,
  price,
}: CreateProducttData): Promise<void> {
  await Http.post<void, CreateProducttData>("/products", {
    name,
    description,
    price,
  });
}
