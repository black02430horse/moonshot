import { AxiosBlogModel, BlogModel } from "../../models";
import { IAction } from "./action";

export type GetBlogsRequest = IAction & {
  blogs?: BlogModel[]
};

export type CreateBlogsRequest = IAction & {
  blog: AxiosBlogModel,
  file?: File
};

export type EditBlogsRequest = IAction & {
  blog: AxiosBlogModel,
  file?: File,
  id: number
};

export type DeleteBlogsRequest = IAction & {
  id: number
};