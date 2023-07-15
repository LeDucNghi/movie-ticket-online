import { AuthState, UserProfile } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/app/store";

const initialState: AuthState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  },

  isLoggedIn: false,
  userProfile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, action: PayloadAction<UserProfile>) {},

    signin(state, action: PayloadAction<UserProfile>) {
      state.userProfile = action.payload;
    },

    signup(state, action: PayloadAction<UserProfile>) {
      state.userProfile = action.payload;
    },
  },
});

export const { logout, signin, signup } = authSlice.actions;

export const selectValue = (state: RootState) => state.authReducer.value;
export const selectIsLoggedIn = (state: RootState) =>
  state.authReducer.isLoggedIn;
export const selectProfile = (state: RootState) =>
  state.authReducer.userProfile;

export const authReducer = authSlice.reducer;
