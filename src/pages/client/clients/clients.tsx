import { PencilSimpleLine, Plus, Trash } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import { sessionStorePrefix } from "~/config/env";

import { loadClientsService } from "~/services/client";
import { Client } from "~/domain/client";

import { Link, RenderIf } from "~/components/core";

import * as S from "./styles";

type ClientsType = { total: number; clients: Array<Client> };

export function Clients() {
  const { data: clients } = useQuery<ClientsType>(
    [`${sessionStorePrefix}:list-clients`],
    loadClientsService,
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 30,
    }
  );

  return (
    <>
      <S.ClientHeader>
        <h1>Clientes</h1>

        <Link to="/dashboard/clients/create">
          <Plus size={18} />
          Novo cliente
        </Link>
      </S.ClientHeader>

      <RenderIf condition={!!clients}>
        {clients?.clients.map((client) => (
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
        ))}
      </RenderIf>
    </>
  );
}
