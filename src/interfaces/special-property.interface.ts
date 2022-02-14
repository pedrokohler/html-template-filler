import { SpecialPropertyType } from "../enums";
import { IColoredTag } from "./colored-tag.interface";

export interface ISpecialProperty {
  id: string;
  type: SpecialPropertyType;
  title: string;
  content: string | IColoredTag[]
}
