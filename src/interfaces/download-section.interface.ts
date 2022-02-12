import { IDownloadSectionButton } from "./download-section-button.interface";

export interface IDownloadSection {
  title: string;
  buttons: IDownloadSectionButton[];
}