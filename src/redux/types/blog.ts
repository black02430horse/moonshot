import { BlogModel } from "../../models";
import { IAction } from "./action";

export type GetBlogsRequest = IAction & {
  blogs?: BlogModel[]
};