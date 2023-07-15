import { authApi, movieApi } from "@/api-client";

export async function getUser(id: number) {
  const res = await authApi.getUserProfile(id);
  return res;
}

export async function getAllUsers() {
  const res = await movieApi.getAll();
  return res.data;
}
