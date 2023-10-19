import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";


const initialState: boolean = false;

const initialSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme(
      state: boolean,
      action: PayloadAction<boolean>
    ){
      state = action.payload;
    }
  }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;