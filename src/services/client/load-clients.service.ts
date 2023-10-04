import { Http } from "~/infra/http-client";

import { Client } from "~/domain/client";

interface RequestOutput {
  data: {
    total: number;
    result: Array<{
      id: string;
      name: string;
      document: string;
    }>;
  };
}

interface LoadClientsOutput {
  total: number;
  clients: Array<Client>;
}

interface LoadClientsParams {
  limit?: number;
  page?: number;
}
export async function loadClientsService({
  limit = 10,
  page = 1,
}: LoadClientsParams): Promise<LoadClientsOutput> {
  const { data } = await Http.get<RequestOutput>(
    `/clients?page=${page}&limit=${limit}`
  );

  const clients = {
    total: data.total,
    clients: data.result.map((client) =>
      Client.create({
        id: client.id,
        name: client.name,
        document: client.document,
      })
    ),
  };

  return clients;
}
