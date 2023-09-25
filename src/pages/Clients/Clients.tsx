import { PencilSimpleLine, Plus, Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { Link } from "~/components/core/Link/Link";
import { Client } from "~/domain/Client";
import { loadClients } from "~/useCases/LoadClients";

import * as S from "./styles";

export function Clients() {
  const [clients, setClients] = useState<Array<Client>>([]);

  useEffect(() => {
    loadClients.execute().then((clientData) => setClients(clientData));
  }, []);

  return (
    <>
      <S.ClientHeader>
        <h1>Clientes</h1>

        <Link to="/dashboard/clients/create">
          <Plus size={18} />
          Novo cliente
        </Link>
      </S.ClientHeader>

      {clients.length
        ? clients.map((client) => (
            <S.ClientsTable key={client.id}>
              <span>
                <div>
                  <h2>{client.name}</h2>-<span>{client.document}</span>
                </div>

                <S.ClientsTableActions>
                  <button disabled className="delete">
                    <Trash size={24} weight="duotone" />
                  </button>

                  <button disabled className="edit">
                    <PencilSimpleLine size={24} weight="duotone" />
                  </button>
                </S.ClientsTableActions>
              </span>
            </S.ClientsTable>
          ))
        : null}
    </>
  );
}
