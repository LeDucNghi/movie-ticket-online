import { SignIn, SignUp, UserProfile, VerifyToken } from "@/models";

import { User } from "@/models";
import { axiosClient } from "./axiosClient";

export const authApi = {
  signin({ name, pwd }: SignIn): Promise<UserProfile> {
    return axiosClient.post(`auth/signin`, { name, pwd });
  },

  signup(params: SignUp): Promise<UserProfile> {
    return axiosClient.post(`/auth/register`, params);
  },

  verifyToken(): Promise<VerifyToken> {
    return axiosClient.post(`/auth/verify-access-token`);
  },

  regenerateToken(): Promise<UserProfile> {
    return axiosClient.post(`/auth/re-gen`);
  },

  getUserProfile(id: number): Promise<User> {
    return axiosClient.get(`users/${id}`);
  },

  getUserList(): Promise<any> {
    return axiosClient.get(`auth/getall`);
  },
};
