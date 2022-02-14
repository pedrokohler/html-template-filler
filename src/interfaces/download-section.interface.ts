import { IUrlWithText } from "./url-with-text.interface";

export interface IDownloadSection {
  id: string;
  title: string;
  buttons: IUrlWithText[];
}