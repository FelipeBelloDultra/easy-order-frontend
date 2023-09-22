import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "~/components/core";

import { createClient } from "~/useCases/CreateClient";

const clientSchema = zod.object({
  name: zod.string().min(4).max(255),
  document: zod.string().min(4).max(255),
});

type ClientData = zod.infer<typeof clientSchema>;

function ClientForm() {
  const { register, handleSubmit } = useForm<ClientData>({
    resolver: zodResolver(clientSchema),
  });

  async function handleSubmitForm(data: ClientData) {
    await createClient.execute({
      name: data.name,
      document: data.document,
    });
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col">
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" {...register("name")} />

      <label htmlFor="document">Documento</label>
      <input id="document" type="text" {...register("document")} />

      <Button type="submit">Salvar</Button>
    </form>
  );
}

export default ClientForm;
