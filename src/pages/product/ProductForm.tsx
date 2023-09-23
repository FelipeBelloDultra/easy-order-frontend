import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Inputs } from "~/components/core/Input";
import { Button } from "~/components/core";

import { createProduct } from "~/useCases/CreateProduct";
import { Link } from "react-router-dom";

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

  async function handleSubmitForm(data: ProductData) {
    await createProduct.execute({
      name: data.name,
      description: data.description,
      price: data.price,
    });
  }

  return (
    <>
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">Criar novo produto</h1>

        <Link to="/dashboard/products">Voltar</Link>
      </span>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <span className="flex flex-col gap-8 mb-8">
          <div className="flex gap-8">
            <span className="w-[80%]">
              <Inputs.Group>
                <Inputs.Label htmlFor="name">Nome</Inputs.Label>
                <Inputs.Input
                  hasError={!!errors.name?.message}
                  id="name"
                  type="text"
                  {...register("name")}
                />
                {errors.name?.message ? (
                  <Inputs.Error massage={errors.name.message} />
                ) : null}
              </Inputs.Group>
            </span>

            <span className="w-[20%]">
              <Inputs.Group>
                <Inputs.Label htmlFor="price">Preco</Inputs.Label>
                <Inputs.Input
                  hasError={!!errors.price?.message}
                  id="price"
                  type="text"
                  {...register("price")}
                />
                {errors.price?.message ? (
                  <Inputs.Error massage={errors.price.message} />
                ) : null}
              </Inputs.Group>
            </span>
          </div>

          <Inputs.Group>
            <Inputs.Label htmlFor="description">Descricao</Inputs.Label>
            <Inputs.Textarea
              hasError={!!errors.description?.message}
              id="description"
              {...register("description")}
            />
            {errors.description?.message ? (
              <Inputs.Error massage={errors.description.message} />
            ) : null}
          </Inputs.Group>
        </span>

        <Button type="submit">Salvar</Button>
      </form>
    </>
  );
}

export default ProductForm;
