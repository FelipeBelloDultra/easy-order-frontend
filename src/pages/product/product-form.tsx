import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowFatLeft } from "@phosphor-icons/react";

import { Button, Inputs, Link } from "~/components/core";
import { ProductView } from "~/components/products";

import * as S from "./styles";

const productSchema = zod.object({
  name: zod.string().max(255).min(5),
  description: zod.string().max(255).min(5),
  price: zod.number(),
});

type ProductData = zod.infer<typeof productSchema>;

export function ProductForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<ProductData>({
    resolver: zodResolver(productSchema),
  });

  const { name, description, price } = watch();

  async function handleSubmitForm(data: ProductData) {
    console.log(data);
  }

  return (
    <>
      <S.ProductHeader>
        <h1>Criar produto</h1>

        <Link to="/dashboard/products">
          <ArrowFatLeft size={18} weight="duotone" />
          Voltar
        </Link>
      </S.ProductHeader>

      <S.CreateProductContainer>
        <S.ProductFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
          <div>
            <span>
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

            <span>
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

          <Button type="submit">Salvar</Button>
        </S.ProductFormContainer>

        <ProductView name={name} description={description} price={price} />
      </S.CreateProductContainer>
    </>
  );
}
