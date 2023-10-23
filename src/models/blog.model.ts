import { TipButtonModel } from "./button.model";

export interface BlogModel{
  img: string,
  creator: string,
  title: string,
  content: string,
  buttons: {content: string, color: TipButtonModel}[]
  id: number,
  deletedAt?: Date
  // buttons: string
}

export interface AxiosBlogModel{
  img: string,
  creator: string,
  title: string,
  content: string,
  buttons: string,
  id: number,
  file?: File
  // buttons: string
}

export interface ModalModel extends BlogModel {
  file?: File,
  open: boolean,
  isOk: boolean,
  index?: number
}