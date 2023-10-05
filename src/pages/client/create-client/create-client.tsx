import { ArrowFatLeft } from "@phosphor-icons/react";

import { Button, Inputs, Link } from "~/components/core";

import { useCreateClient } from "./use-create-client";

import * as S from "./styles";

export function CreateClient() {
  const {
    handleSubmit,
    handleSubmitCreateClientForm,
    errors,
    isLoading,
    register,
  } = useCreateClient();

  return (
    <>
      <S.ClientHeader>
        <h1>Cadastrar cliente</h1>

        <Link to="/dashboard/clients">
          <ArrowFatLeft size={18} weight="duotone" />
          Voltar
        </Link>
      </S.ClientHeader>

      <S.ClientFormContainer
        onSubmit={handleSubmit(handleSubmitCreateClientForm)}
      >
        <span>
          <div>
            <Inputs.Group>
              <Inputs.Label htmlFor="name">Nome</Inputs.Label>
              <Inputs.Input
                placeholder="jonsnow@hotmail.com"
                hasError={!!errors.name?.message}
                id="name"
                type="text"
                {...register("name")}
              />
              {errors.name?.message ? (
                <Inputs.Error massage={errors.name.message} />
              ) : null}
            </Inputs.Group>
          </div>

          <Inputs.Group>
            <Inputs.Label htmlFor="document">Documento</Inputs.Label>
            <Inputs.Input
              hasError={!!errors.document?.message}
              placeholder="000.000.000-00"
              id="document"
              type="text"
              {...register("document")}
            />
            {errors.document?.message ? (
              <Inputs.Error massage={errors.document?.message} />
            ) : null}
          </Inputs.Group>
        </span>

        <Button type="submit" isFull isLoading={isLoading}>
          Salvar
        </Button>
      </S.ClientFormContainer>
    </>
  );
}
