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
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface SignIn {
  username: string;
  password: string;
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
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
