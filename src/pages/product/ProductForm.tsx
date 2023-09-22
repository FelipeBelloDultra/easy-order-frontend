import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "~/components/core";

import { createProduct } from "~/useCases/CreateProduct";

const productSchema = zod.object({
  name: zod.string().max(255).min(5),
  description: zod.string().max(255).min(5),
  price: zod.number(),
});

type ProductData = zod.infer<typeof productSchema>;

function ProductForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProductData>({
    resolver: zodResolver(productSchema),
  });

  console.log(errors);

  async function handleSubmitForm(data: ProductData) {
    await createProduct.execute({
      name: data.name,
      description: data.description,
      price: data.price,
    });
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col">
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" {...register("name")} />

      <label htmlFor="description">Descricao</label>
      <input id="description" type="text" {...register("description")} />

      <label htmlFor="price">Preco</label>
      <input
        id="price"
        type="text"
        {...register("price", {
          valueAsNumber: true,
        })}
      />

      <Button type="submit">Salvar</Button>
    </form>
  );
}

export default ProductForm;
