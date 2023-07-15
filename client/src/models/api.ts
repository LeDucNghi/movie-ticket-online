export interface ListResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface Pagination {
  _page: number;
  _limit: number;
  _totalRows: number;
}
