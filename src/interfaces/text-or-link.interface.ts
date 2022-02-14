import { TextOrLinkType } from "../enums";

export interface TextOrLink {
  id: string;
  type: TextOrLinkType;
  value: string;
  url?: string;
}