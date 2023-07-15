import { SignIn, SignUp } from "@/models";

import { authApi } from "@/api-client";
import { toast } from "react-toastify";
import { useState } from "react";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signin({ username, password }: SignIn) {
    setIsLoading(true);
    const res = await authApi.signin({ password, username });

    setIsLoading(false);
    localStorage.setItem("profile", JSON.stringify({ ...res }));

    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  async function signup({ username, password, birth }: SignUp) {
    setIsLoading(true);
    const res = await authApi.signup({
      password,
      username,
      birth,
      assistRoles: [],
      mainRole: "",
    });

    setIsLoading(false);
    localStorage.setItem("profile", JSON.stringify({ ...res }));
  }

  return { isLoading, signin, signup };
};
