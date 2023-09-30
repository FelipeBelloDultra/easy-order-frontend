import { Client } from "~/domain/Client";
import { httpClient } from "~/infra/http/HttpClient";

class LoadClients {
  public async execute() {
    const { clients } = await httpClient.get<{
      clients: [{ document: string; id: string; name: string }];
    }>("/clients");

    return clients.map((client) =>
      Client.create({
        id: client.id,
        document: client.document,
        name: client.name,
      })
    );
  }
}

export const loadClients = new LoadClients();
