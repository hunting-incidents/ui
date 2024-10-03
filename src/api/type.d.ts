export type requestCtrl = {
  signal: AbortSignal;
};

export type pagingResp<T> = {
  total: number;
  page_size: number;
  page: number;
  data: T[];
};

export type pagingReq = {
  page_size?: number;
  order?: string;
  page?: number;
};
