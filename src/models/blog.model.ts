import { TipButtonModel } from "./button.model";

export interface BlogModel{
  img: any,
  creator: string,
  title: string,
  content: string,
  buttons: {content: string, color: TipButtonModel}[]
}