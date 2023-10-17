import { TipButtonModel } from "./button.model";

export interface BlogModel{
  img: string,
  creator: string,
  title: string,
  content: string,
  buttons: {content: string, color: TipButtonModel}[]
}