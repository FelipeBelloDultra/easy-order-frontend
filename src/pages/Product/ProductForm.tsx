import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Inputs } from "~/components/core/Input";
import { Button } from "~/components/core";
import { Link } from "~/components/core/Link/Link";

import { createProduct } from "~/useCases/CreateProduct";

import * as S from "./styles";
import { ArrowFatLeft } from "@phosphor-icons/react";

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
      <S.ProductHeader>
        <h1>Criar produto</h1>

        <Link to="/dashboard/products">
          <ArrowFatLeft size={18} weight="duotone" />
          Voltar
        </Link>
      </S.ProductHeader>

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
    </>
  );
}
