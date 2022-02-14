import { IUrlWithText } from "./url-with-text.interface";


export interface IColoredTag extends IUrlWithText {
  backgroundColor: string;
  textColor: string;
}