import { createSlice } from "@reduxjs/toolkit";

type LoadingState = {
  status: boolean;
};

const initialState: LoadingState = {
  status: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading(state: LoadingState) {
      state.status = true;
    },
    finishLoading(state: LoadingState) {
      state.status = false;
    },
  },
});

export const actions = loadingSlice.actions;
export const reducer = loadingSlice.reducer;
