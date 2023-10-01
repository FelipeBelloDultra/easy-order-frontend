export interface HttpErrorProps {
  code: number;
  message: string;
  status: string;
  errors?: { [key: string]: Array<string> };
}

export class HttpError extends Error {
  public code: number;
  public message: string;
  public status: string;
  public errors: { [key: string]: Array<string> } = {};

  constructor({ code, message, status, errors = {} }: HttpErrorProps) {
    super();
    this.name = HttpError.name;
    this.code = code;
    this.message = message;
    this.status = status;
    this.errors = errors;
  }
}
