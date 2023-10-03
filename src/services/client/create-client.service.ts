import { Http } from "~/infra/http-client";

interface CreateClientData {
  name: string;
  document: string;
}

export async function createClientService({
  document,
  name,
}: CreateClientData): Promise<void> {
  await Http.post<void, CreateClientData>("/clients", { document, name });
}
