import { IGenericText } from "./generic-text.interface";

export interface IFeature {
  id: string;
  title: string;
  properties: IGenericText[];
}