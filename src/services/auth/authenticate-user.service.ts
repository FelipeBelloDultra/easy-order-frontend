import { Http } from "~/infra/http-client";

interface RequestOutput {
  data: {
    authenticated_id: string;
    token: string;
  };
}

interface RequestInput {
  email: string;
  password: string;
}

interface AuthenticateUserServiceOutput {
  authenticated_id: string;
  token: string;
}

export async function authenticateUserService({
  email,
  password,
}: RequestInput): Promise<AuthenticateUserServiceOutput> {
  const { data } = await Http.post<RequestOutput, RequestInput>("/session", {
    email,
    password,
  });

  return data;
}
