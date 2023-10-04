import { useEffect } from "react";
import { PencilSimpleLine, Plus, Trash, Users } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import { sessionStorePrefix } from "~/config/env";

import { loadClientsService } from "~/services/client";
import { Client } from "~/domain/client";

import { Link, Pagination, RenderIf, Skeleton } from "~/components/core";

import * as S from "./styles";
import { usePagination } from "~/hooks/use-pagination";

type ClientsType = { total: number; clients: Array<Client> };

export function Clients() {
  const { setTotalItems, pages, perPage, setCurrentPage, currentPage } =
    usePagination();
  const { data: clients, isLoading } = useQuery<ClientsType>(
    [`${sessionStorePrefix}:list-clients`, currentPage, perPage],
    async () => {
      const result = await loadClientsService({
        page: currentPage,
        limit: perPage,
      });

      return result;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 30,
    }
  );

  useEffect(() => {
    if (!clients) return;

    setTotalItems(clients.total);
  }, [clients, setTotalItems]);

  return (
    <>
      <S.ClientHeader>
        <h1>Clientes</h1>

        <Link to="/dashboard/clients/create">
          <Plus size={18} />
          Novo cliente
        </Link>
      </S.ClientHeader>

      <RenderIf condition={!clients && isLoading}>
        <S.ClientLoadingList>
          <div>
            <Skeleton skeletons={3} />
          </div>
          <div>
            <Skeleton skeletons={3} />
          </div>
          <div>
            <Skeleton skeletons={3} />
          </div>
          <div>
            <Skeleton skeletons={3} />
          </div>
        </S.ClientLoadingList>
      </RenderIf>

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

      <RenderIf condition={(!clients || !clients.clients.length) && !isLoading}>
        <S.EmptyClientList>
          <Users size={45} weight="duotone" />

          <h3>Nenhum cliente encontrado</h3>
        </S.EmptyClientList>
      </RenderIf>

      <RenderIf condition={!!clients && clients.total >= perPage}>
        <S.ClientPaginationContainer>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            onUpdateCurrentPage={(page: number) => setCurrentPage(page)}
          />
        </S.ClientPaginationContainer>
      </RenderIf>
    </>
  );
}
