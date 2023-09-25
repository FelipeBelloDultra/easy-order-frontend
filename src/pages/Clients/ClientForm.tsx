import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowFatLeft } from "@phosphor-icons/react";

import { Button } from "~/components/core";
import { Inputs } from "~/components/core/Input";
import { Link } from "~/components/core/Link/Link";

import { createClient } from "~/useCases/CreateClient";

import * as S from "./styles";

const clientSchema = zod.object({
  name: zod.string().min(4).max(255),
  document: zod.string().min(4).max(255),
});

type ClientData = zod.infer<typeof clientSchema>;

export function ClientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientData>({
    resolver: zodResolver(clientSchema),
  });

  async function handleSubmitForm(data: ClientData) {
    await createClient.execute({
      name: data.name,
      document: data.document,
    });
  }

  return (
    <>
      <S.ClientHeader>
        <h1>Cadastrar cliente</h1>

        <Link to="/dashboard/clients">
          <ArrowFatLeft size={18} weight="duotone" />
          Voltar
        </Link>
      </S.ClientHeader>

      <S.ClientFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <span>
          <div>
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
          </div>

          <Inputs.Group>
            <Inputs.Label htmlFor="document">Documento</Inputs.Label>
            <Inputs.Input
              hasError={!!errors.document?.message}
              id="document"
              type="text"
              {...register("document")}
            />
            {errors.document?.message ? (
              <Inputs.Error massage={errors.document?.message} />
            ) : null}
          </Inputs.Group>
        </span>

        <Button type="submit" isFull>
          Salvar
        </Button>
      </S.ClientFormContainer>
    </>
  );
}
