import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { sessionStorePrefix } from "~/config/env";

import { Inputs, Pagination, RenderIf } from "~/components/core";

import { loadClientsService } from "~/services/client";
import { Client } from "~/domain/client";
import { useCreateOrder } from "~/hooks/use-create-order";
import { usePagination } from "~/hooks/use-pagination";

import * as S from "./styles";

type ClientsType = { total: number; clients: Array<Client> };

export function SelectOrderClient() {
  const { updateSelectedClients } = useCreateOrder();
  const { setTotalItems, pages, perPage, setCurrentPage, currentPage } =
    usePagination();
  const queryClient = useQueryClient();
  const { data: clients } = useQuery<ClientsType>(
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
      initialData: queryClient.getQueryData([
        `${sessionStorePrefix}:list-clients`,
        currentPage,
        perPage,
      ]),
    }
  );

  useEffect(() => {
    if (!clients) return;

    setTotalItems(clients.total);
  }, [clients, setTotalItems]);

  function handleSelectOption(id: string) {
    const client = clients?.clients.find((c) => c.id === id);

    if (client) {
      updateSelectedClients({
        id,
      });
    }
  }

  return (
    <S.CreateClientOnOrder>
      <h2>Selecione um cliente</h2>

      <div>
        <Inputs.Group>
          <Inputs.Label htmlFor="selectClient">Selecionar</Inputs.Label>
          <Inputs.Select
            id="selectClient"
            onChangeSelect={(id) => handleSelectOption(id)}
            defaultValue="default"
          >
            <option value="default">Selecione um cliente existente</option>
            {clients?.clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} - {client.document}
              </option>
            ))}
          </Inputs.Select>
        </Inputs.Group>
      </div>

      <RenderIf condition={!!clients && clients.total > perPage}>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onUpdateCurrentPage={(page: number) => setCurrentPage(page)}
        />
      </RenderIf>
    </S.CreateClientOnOrder>
  );
}
