import { TipButtonModel } from "./button.model";

export interface BlogModel{
  img: string,
  creator: string,
  title: string,
  content: string,
  buttons: {content: string, color: TipButtonModel}[]
  // buttons: string
}

export interface AxiosBlogModel{
  img: string,
  creator: string,
  title: string,
  content: string,
  buttons: string,
  // buttons: string
}

export interface ModalModel extends BlogModel {
  open: boolean,
  isOk: boolean
}