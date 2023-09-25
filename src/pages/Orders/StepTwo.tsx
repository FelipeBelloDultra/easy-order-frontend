import { useContext, useEffect, useState } from "react";
import { Inputs } from "~/components/core/Input";
import { OrderContext } from "~/contexts/CreateOrderContexts";
import { Client } from "~/domain/Client";
import { loadClients } from "~/useCases/LoadClients";

export function StepTwo() {
  const { updateSelectedClients, selectedClient } = useContext(OrderContext);
  const [clientData, setClientData] = useState<Array<Client>>([]);

  useEffect(() => {
    loadClients.execute().then((clients) => setClientData(clients));
  }, []);

  function handleSelectOption(id: string) {
    const client = clientData.find((c) => c.id === id);

    if (client) {
      updateSelectedClients({
        id,
        name: client.name,
        document: client.document,
      });
    }
  }

  return (
    <span className="flex flex-col gap-3 w-full">
      Selecione ou cadastre um cliente:
      <Inputs.Select onSelect={(id) => handleSelectOption(id)}>
        {clientData.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name} - {client.document}
          </option>
        ))}
      </Inputs.Select>
      <Inputs.Group>
        ou crie um novo:
        <Inputs.Label htmlFor="name">Nome</Inputs.Label>
        <Inputs.Input
          type="text"
          id="name"
          onChange={(e) =>
            updateSelectedClients({
              ...selectedClient,
              id: undefined,
              name: e.target.value,
            })
          }
        />
      </Inputs.Group>
      <Inputs.Group>
        <Inputs.Label htmlFor="document">Documento</Inputs.Label>
        <Inputs.Input
          type="text"
          id="document"
          onChange={(e) =>
            updateSelectedClients({
              ...selectedClient,
              id: undefined,
              document: e.target.value,
            })
          }
        />
      </Inputs.Group>
    </span>
  );
}
