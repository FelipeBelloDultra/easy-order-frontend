import axios, { isAxiosError } from "axios";
import { HttpError } from "./http-error";

import { apiUrl } from "~/config/env";

const api = axios.create({
  timeout: 5000,
  baseURL: apiUrl,
});

export class Http {
  static async get<Output>(url: string): Promise<Output> {
    try {
      const { data } = await api.get<{ data: Output }>(url);

      return data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const { response } = error;
        throw new HttpError({
          code: response?.data.error.code || 500,
          message: response?.data.error.message || "Internal Server Error",
          status: response?.data.error.status || "error",
          errors: response?.data.error.errors,
        });
      }
      throw error;
    }
  }

  static async post<Output, Input = undefined>(
    url: string,
    inputData?: Input
  ): Promise<Output> {
    try {
      const { data } = await api.post<{ data: Output }>(url, inputData);

      return data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const { response } = error;
        throw new HttpError({
          code: response?.data.error.code || 500,
          message: response?.data.error.message || "Internal Server Error",
          status: response?.data.error.status || "error",
          errors: response?.data.error.errors,
        });
      }
      throw error;
    }
  }

  static setHeader(key: string, value: string): void {
    api.defaults.headers[key] = value;
  }
}
