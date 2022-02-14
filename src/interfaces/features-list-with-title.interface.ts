import { ISpecialProperty } from "./special-property.interface";

export interface IFeatureWithTitle {
  id: string;
  title: string;
  properties: ISpecialProperty[];
}