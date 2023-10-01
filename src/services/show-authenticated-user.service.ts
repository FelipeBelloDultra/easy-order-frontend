import { Http } from "~/infra/http-client";

interface AuthenticateUserOutput {
  authenticated_id: string;
  token: string;
}

export async function showAuthenticatedUser(): Promise<AuthenticateUserOutput> {
  const result = await Http.post<AuthenticateUserOutput>("/session/me");

  return result;
}
