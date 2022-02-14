import { IGenericText } from "./feature-property.interface";

export interface IFeature {
  id: string;
  title: string;
  properties: IGenericText[];
}