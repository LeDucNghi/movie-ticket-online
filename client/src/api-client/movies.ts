import { Pagination } from "../models/api";
import { axiosClient } from "./axiosClient";

export const movieApi = {
  getAll(params?: Pagination): Promise<any> {
    // const { _page, _limit } = params;
    return axiosClient.get(`users`);
  },
};
