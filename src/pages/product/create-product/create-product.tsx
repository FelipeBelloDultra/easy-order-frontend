import { ArrowFatLeft } from "@phosphor-icons/react";

import { Button, Inputs, Link } from "~/components/core";
import { ProductView } from "~/components/products";

import { useCreateProduct } from "./use-create-product";

import * as S from "./styles";

export function CreateProdcut() {
  const {
    handleSubmit,
    handleSubmitCreateProductForm,
    errors,
    isLoading,
    description,
    name,
    price,
    register,
  } = useCreateProduct();

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
        <S.ProductFormContainer
          onSubmit={handleSubmit(handleSubmitCreateProductForm)}
        >
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
                  {...register("price", {
                    valueAsNumber: true,
                  })}
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

          <Button type="submit" isLoading={isLoading}>
            Salvar
          </Button>
        </S.ProductFormContainer>

        <ProductView name={name} description={description} price={price} />
      </S.CreateProductContainer>
    </>
  );
}
