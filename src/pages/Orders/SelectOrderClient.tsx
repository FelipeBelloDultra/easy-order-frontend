import { useContext, useState } from "react";
import { Inputs } from "~/components/core/Input";
import { OrderContext } from "~/contexts/CreateOrderContexts";

import * as S from "./styles";

export function SelectOrderClient() {
  const { updateSelectedClients, selectedClient } = useContext(OrderContext);
  const [selectNewClient, setSelectNewClient] = useState(true);

  const clientData = [
    {
      id: String(+new Date()),
      document: "xxx.xxx.xxx-xx",
      name: "Felipe Bello Dultra",
    },
  ];

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
    <S.CreateClientOnOrder>
      <h2>
        {selectNewClient ? "Selecione um cliente" : "Crie um cliente novo"}
      </h2>

      <span>
        <label htmlFor="useCreatedClient">Usar cliente ja cadastrado</label>
        <input
          type="checkbox"
          id="useCreatedClient"
          checked={selectNewClient}
          onChange={() => setSelectNewClient((prev) => !prev)}
        />
      </span>

      <div>
        {selectNewClient ? (
          <Inputs.Group>
            <Inputs.Label htmlFor="selectClient">Selecionar</Inputs.Label>
            <Inputs.Select
              id="selectClient"
              onChangeSelect={(id) => handleSelectOption(id)}
              defaultValue="default"
            >
              <option value="default">Selecione um cliente existente</option>
              {clientData.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name} - {client.document}
                </option>
              ))}
            </Inputs.Select>
          </Inputs.Group>
        ) : (
          <div className="create-client-input-groups">
            <Inputs.Group>
              <Inputs.Label htmlFor="name">Nome</Inputs.Label>
              <Inputs.Input
                type="text"
                placeholder="Digite o nome do novo cliente"
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
                placeholder="Digite o documento do novo cliente"
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
          </div>
        )}
      </div>
    </S.CreateClientOnOrder>
  );
}
