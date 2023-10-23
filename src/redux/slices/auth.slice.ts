import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";
import { UserModel } from "../../models";
import { IAction } from "../types";

type AuthState = {
  token: string | null,
  user: UserModel | null
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  user: null
}

const initialSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUpRequest(
      state: AuthState,
      action: PayloadAction <AppActionTypes.Auth.GetSignUpRequestAction>
    ){ },

    signInRequest(
      state: AuthState,
      action: PayloadAction <AppActionTypes.Auth.GetSignInRequestAction>
    ){ },

    setToken(
      state: AuthState,
      action: PayloadAction<string>
    ){ 
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    logOut(
      state: AuthState
    ){
      localStorage.removeItem("token");
      state.user = null;
    },

    getMeRequest(
      state: AuthState,
      action: PayloadAction<IAction>
    ) { },

    getMeRequestSuccess(
      state: AuthState,
      action: PayloadAction<UserModel>
    ){
      // console.log("got me!");
      state.user = action.payload;
    }
  }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;