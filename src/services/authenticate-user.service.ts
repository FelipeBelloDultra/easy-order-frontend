import { Http } from "~/infra/http-client";

interface AuthenticateUserOutput {
  authenticated_id: string;
  token: string;
}

interface AuthenticateUserInput {
  email: string;
  password: string;
}

export async function authenticateUserService({
  email,
  password,
}: AuthenticateUserInput): Promise<AuthenticateUserOutput> {
  const result = await Http.post<AuthenticateUserOutput, AuthenticateUserInput>(
    "/session",
    {
      email,
      password,
    }
  );

  return result;
}
