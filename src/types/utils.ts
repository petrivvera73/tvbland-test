export interface IFetchError {
  status?: number;
  statusCode?: number;
  message: string;
  error: string;
}

export interface IDefaultObject {
  [key: string]: unknown;
}
