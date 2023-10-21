import { AxiosBlogModel, BlogModel } from "../../models";
import { IAction } from "./action";

export type GetBlogsRequest = IAction & {
  blogs?: BlogModel[]
};

export type CreateBlogsRequest = IAction & {
  blog: AxiosBlogModel
};