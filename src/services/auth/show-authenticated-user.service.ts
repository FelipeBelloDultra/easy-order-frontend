import { Http } from "~/infra/http-client";

interface RequestOutput {
  id: string;
  name: string;
  email: string;
}

export async function showAuthenticatedUserService(): Promise<RequestOutput> {
  const result = await Http.post<RequestOutput>("/session/me");

  return result;
}
