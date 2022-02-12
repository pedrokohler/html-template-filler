import { IFeatureProperty } from "./feature-property.interface";

export interface IFeature {
  id: string;
  title: string;
  properties: IFeatureProperty[];
}