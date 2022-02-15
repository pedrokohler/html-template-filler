import { ISpecialProperty } from "./special-property.interface";

export interface IFeatureWithSpecialProperty {
  id: string;
  title: string;
  properties: ISpecialProperty[];
}