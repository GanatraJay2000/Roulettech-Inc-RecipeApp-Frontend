import { AxiosResponse } from "axios";

export enum ErrorMessages {
  INVALID_JWT = "Not a valid JWT Token",
  INVALID_ISSUER = "Invalid issuer",
  INVALID_TOKEN_USE = "Invalid token_use",
  INVALID_AUD = "Invalid aud",
  JWKS_DOWNLOAD_FAILED = "JWK json download failed",
  INVALID_TOKEN_UNAUTHORIZED = "Invalid token: Unauthorized",
  TOKEN_VALIDATION_FAILED = "Token validation failed",
}

export interface IData<T> {
  result: T;
  errors: string[];
  stack: string;
}

export interface IAxiosResponse<T> extends AxiosResponse {
  data: IData<T>;
}
