import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";
import { UserModel } from "../../models";
import { IAction } from "../types";

type AuthState = {
  token: string | null,
  user: UserModel | null
}

const initialState: AuthState = {
  token: null,
  user: null
}

const initialSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUpRequest(
      state: AuthState,
      action: PayloadAction <AppActionTypes.Auth.GetSignUpRequestAction>
    ){ }
  }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;