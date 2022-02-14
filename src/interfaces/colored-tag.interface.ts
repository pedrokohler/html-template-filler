import { ITag } from "./tag.interface";


export interface IColoredTag extends ITag {
  backgroundColor: string;
  textColor: string;
}