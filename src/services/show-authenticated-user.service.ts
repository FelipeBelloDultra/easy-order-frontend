import { Http } from "~/infra/http-client";

interface AuthenticateUserOutput {
  id: string;
  name: string;
  email: string;
}

export async function showAuthenticatedUserService(): Promise<AuthenticateUserOutput> {
  const result = await Http.post<AuthenticateUserOutput>("/session/me");

  return result;
}
