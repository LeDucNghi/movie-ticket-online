import { authApi, movieApi } from "@/api-client";

import { SignIn } from "@/models";

export async function getUser(id: number) {
  const res = await authApi.getUserProfile(id);
  return res;
}

export async function getAllUsers() {
  const res = await authApi.getUserList();
  return res.data;
}

export const signin = async ({ name, pwd }: SignIn) => {
  console.log("🚀 ~ file: getUser.ts:16 ~ signin ~ { name, pwd }:", {
    name,
    pwd,
  });
  // try {
  //   const res = await authApi.signin({name, pwd})
  // } catch (error) {
  //   console.log("🚀 ~ file: getUser.ts:18 ~ signin ~ error:", error)

  // }
  const res = await authApi.signin({ name, pwd });

  return res;
};
