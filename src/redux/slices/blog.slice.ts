import { BlogList } from "../../consts";
import { BlogModel } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";

type BlogState = {
  blogs: BlogModel[] | undefined
}

const initialState: BlogState = {
  blogs: []
}

const initialSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    getBlogRequestSuccess(
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.GetBlogsRequest>
    ){
      state.blogs = action.payload.blogs;
    },

    getBlogRequest (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.GetBlogsRequest>
    ) {

    }
  }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;