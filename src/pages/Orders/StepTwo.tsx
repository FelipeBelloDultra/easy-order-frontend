import { useContext, useEffect, useState } from "react";
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
      <select onChange={(e) => handleSelectOption(e.target.value)}>
        {clientData.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name} - {client.document}
          </option>
        ))}
      </select>
      ou crie um novo:
      <label htmlFor="name">Nome</label>
      <input
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
      <label htmlFor="document">Documento</label>
      <input
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
    </span>
  );
}
