import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { blogActions, blogReducer } from "./slices";

const reducer = combineReducers({
  blog: blogReducer
});

export const store = configureStore({
  preloadedState: {},
  reducer,
})

export const AppActions = {
  blog: blogActions
}

export * as AppActionTypes from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;