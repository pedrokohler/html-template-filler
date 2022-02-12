import { IDownloadSectionButton } from "./download-section-button.interface";

export interface IDownloadSection {
  id: string;
  title: string;
  buttons: IDownloadSectionButton[];
}