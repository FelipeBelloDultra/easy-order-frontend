import { Http } from "~/infra/http-client";

interface RequestOutput {
  data: {
    id: string;
    name: string;
    email: string;
  };
}
interface ShowAuthenticatedUserServiceOutput {
  id: string;
  name: string;
  email: string;
}

export async function showAuthenticatedUserService(): Promise<ShowAuthenticatedUserServiceOutput> {
  const result = await Http.post<RequestOutput>("/session/me");

  return result.data;
}
