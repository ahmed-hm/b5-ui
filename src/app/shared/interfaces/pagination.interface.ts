export interface Pagination<T = any> {
  limit: number;
  products: T[];
  skip: number;
  total: number;
}
