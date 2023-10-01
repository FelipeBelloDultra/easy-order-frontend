import { useEffect, useState } from "react";
import { PencilSimpleLine, Plus, Trash } from "@phosphor-icons/react";

import { loadClientsService } from "~/services/client";
import { Client } from "~/domain/client";

import { Link } from "~/components/core/Link/Link";

import * as S from "./styles";

type ClientsType = { total: number; clients: Array<Client> };

export function Clients() {
  const [clients, setClients] = useState<ClientsType>({
    clients: [],
    total: 0,
  });

  useEffect(() => {
    loadClientsService().then(setClients);
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

      {clients.clients.length
        ? clients.clients.map((client) => (
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
