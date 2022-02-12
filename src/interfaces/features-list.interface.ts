import { IFeatureProperty } from "./feature-property.interface";

export interface IFeaturesList {
  id: string;
  title: string;
  properties: IFeatureProperty[];
}