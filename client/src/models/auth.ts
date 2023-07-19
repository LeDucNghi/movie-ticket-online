export interface AuthState {
  isLoggedIn: boolean;
  userProfile: UserProfile | null | undefined;

  value: {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
  };
}

export interface FormikValue {
  name: string;
  pwd: string;
  confirmPassword?: string;
}

export interface SignIn {
  name: string;
  pwd: string;
}

export interface SignUp {
  username: string;
  password: string;
  birth?: string; // yyyy-MM-dd format
  mainRole?: ""; // For CMS (Content Management System) Zone - Role Create API in develop, by default the role will be READER
  assistRoles?: []; // For CMS Zone
}

export interface VerifyToken {
  access: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  roles?: ["READER"];
  mainRole?: "READER" | "ADMIN";
  refreshToken?: string;
  accessToken?: string;
}

export interface User {
  _id: string;
  username: string;
  password: string;
  role: [];
  __v: number;
}
