
export interface ITag {
  id: string;
  text: string;
  url: string;
}

export interface IColoredTag extends ITag {
  backgroundColor: string;
  textColor: string;
}

export enum SpecialPropertyType {
  DEFAULT = "DEFAULT",
  TAGS = "TAGS"
}

export interface ISpecialProperty {
  id: string;
  type: SpecialPropertyType;
  title: string;
  content: string | IColoredTag[]
}

export interface IFeatureWithTitle {
  id: string;
  title: string;
  properties: ISpecialProperty[];
}