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
      state.blogs = action.payload.blogs?.filter((item) => item.deletedAt == null) ?? state.blogs ;
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
    },

    editBlogRequest (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.EditBlogsRequest>
    ) {
    },

    editBlogRequestSuccess (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.CreateBlogsRequest>
    ) {
      const newBlog = {...action.payload.blog, buttons: JSON.parse(action.payload.blog.buttons)};
      const tempBlogs = state.blogs.filter((blog:BlogModel) => blog.id != newBlog.id);
      state.blogs = [...tempBlogs, newBlog];
    },
    
    deleteBlogRequest (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.DeleteBlogsRequest>
    ) {
      // console.log("saga");
    },

    deleteBlogRequestSuccess (
      state: BlogState,
      action: PayloadAction<AppActionTypes.Blog.DeleteBlogsRequest>
    ){
      const tempBlogs = state.blogs.filter((blog:BlogModel) => blog.id != action.payload.id);
      state.blogs = tempBlogs;
    }

  }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;