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

export async function loadClientsService(): Promise<LoadClientsOutput> {
  const { data } = await Http.get<RequestOutput>("/clients");

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
