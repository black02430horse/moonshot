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
    getBlogRequestSuccess(
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.GetBlogsRequest>
    ){
      state.blogs = action.payload.blogs ?? state.blogs ;
    },

    getBlogRequest (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.GetBlogsRequest>
    ) {

    },

    createBlogRequest (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.CreateBlogsRequest>
    ) {

    },

    createBlogRequestSuccess (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.CreateBlogsRequest>
    ) {
      const newBlog = {...action.payload.blog, buttons: JSON.parse(action.payload.blog.buttons)};
      state.blogs = [...state.blogs, newBlog];
    }
  }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;