import { FormEvent, useState } from "react";
import { Button } from "~/components/core";
import { createClient } from "~/useCases/CreateClient";

function ClientForm() {
  const [fields, setFields] = useState({ name: "", document: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await createClient.execute({
      name: fields.name,
      document: fields.document,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        onChange={(event) =>
          setFields((prev) => ({
            ...prev,
            name: event.target.value,
          }))
        }
      />
      <label htmlFor="document">Documento</label>
      <input
        id="document"
        type="text"
        onChange={(event) =>
          setFields((prev) => ({
            ...prev,
            document: event.target.value,
          }))
        }
      />

      <Button type="submit">Salvar</Button>
    </form>
  );
}

export default ClientForm;
