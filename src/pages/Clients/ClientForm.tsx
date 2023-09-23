import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "~/components/core";

import { createClient } from "~/useCases/CreateClient";
import { Link } from "react-router-dom";
import { Inputs } from "~/components/core/Input";

const clientSchema = zod.object({
  name: zod.string().min(4).max(255),
  document: zod.string().min(4).max(255),
});

type ClientData = zod.infer<typeof clientSchema>;

function ClientForm() {
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
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">
          Cadastrar novo cliente
        </h1>

        <Link to="/dashboard/clients">Voltar</Link>
      </span>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <span className="flex gap-8 mb-8">
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

        <Button type="submit">Salvar</Button>
      </form>
    </>
  );
}

export default ClientForm;
