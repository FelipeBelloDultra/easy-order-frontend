import axios from "axios";
import { apiUrl } from "~/config/env";

interface IHttpClient {
  get: <Output>(url: string) => Promise<Output>;
  post: <Input, Output>(url: string, data: Input) => Promise<Output>;
}

class HttpClient implements IHttpClient {
  private instance = axios.create({
    timeout: 5000,
    baseURL: apiUrl,
  });

  public async get<Output>(url: string): Promise<Output> {
    const response = await this.instance.get<Output>(url);

    return response.data;
  }

  public async post<Input, Output>(url: string, data?: Input): Promise<Output> {
    const response = await this.instance.post(url, data);

    return response.data;
  }
}

const httpClient = new HttpClient();

export { httpClient };
