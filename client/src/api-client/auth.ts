import { SignIn, SignUp, UserProfile, VerifyToken } from "@/models";

import { User } from "@/models";
import { axiosClient } from "./axiosClient";

export const authApi = {
  signin(params: SignIn): Promise<UserProfile> {
    return axiosClient.post(`/api/auth/login`, params);
  },

  signup(params: SignUp): Promise<UserProfile> {
    return axiosClient.post(`/api/auth/register`, params);
  },

  verifyToken(): Promise<VerifyToken> {
    return axiosClient.post(`/api/auth/verify-access-token`);
  },

  regenerateToken(): Promise<UserProfile> {
    return axiosClient.post(`/api/auth/re-gen`);
  },

  getUserProfile(id: number): Promise<User> {
    return axiosClient.get(`users/${id}`);
  },
};
