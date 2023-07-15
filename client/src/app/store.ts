import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook } from "react-redux";
import { authReducer } from "@/features/auth/authSlice";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
