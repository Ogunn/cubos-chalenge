export interface Genre {
  id: number;
  name: string;
}

export interface GetListResponse {
  genres: Genre[];
}
