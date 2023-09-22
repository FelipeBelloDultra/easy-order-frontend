import { httpClient } from "~/infra/http/HttpClient";

class CreateClient {
  public async execute({ name, document }: { name: string; document: string }) {
    await httpClient.post("/clients", { name, document });
  }
}

export const createClient = new CreateClient();
