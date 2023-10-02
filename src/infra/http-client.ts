import axios, { type AxiosRequestConfig, isAxiosError } from "axios";
import { HttpError } from "./http-error";

import { apiUrl } from "~/config/env";

const api = axios.create({
  timeout: 5000,
  baseURL: apiUrl,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      dispatchEvent(new CustomEvent("unauthorized"));
    }
    return error;
  }
);

export class Http {
  static async get<Output>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Output> {
    try {
      const { data } = await api.get<Output>(url, config);

      return data;
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
    inputData?: Input,
    config?: AxiosRequestConfig
  ): Promise<Output> {
    try {
      const { data } = await api.post<Output>(url, inputData, config);

      return data;
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
