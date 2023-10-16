import { BlogList } from "../../consts";
import { BlogModel } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";

type BlogState = {
  blogs: BlogModel[]
}

const initialState: BlogState = {
  blogs: []
}

const initialSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    setBlog(
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.IGetBlogsRequest>
    ){
      state.blogs = [...BlogList];
    }
  }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;