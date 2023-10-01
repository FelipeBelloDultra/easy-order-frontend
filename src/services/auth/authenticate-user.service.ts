import { Http } from "~/infra/http-client";

interface RequestOutput {
  authenticated_id: string;
  token: string;
}

interface RequestInput {
  email: string;
  password: string;
}

export async function authenticateUserService({
  email,
  password,
}: RequestInput): Promise<RequestOutput> {
  const result = await Http.post<RequestOutput, RequestInput>("/session", {
    email,
    password,
  });

  return result;
}
