import React from "react";
import { Accordion } from "react-bootstrap";
import { SpecialPropertyType } from "../../../../enums";

import { IFeatureWithSpecialProperty } from "../../../../interfaces";
import TagProperty from "./tag-properties";
import TextProperty from "./text-properties";

function FeatureProperties({
  featuresList,
  setFeaturesList,
  feature,
}: {
  featuresList: IFeatureWithSpecialProperty[];
  setFeaturesList: React.Dispatch<React.SetStateAction<IFeatureWithSpecialProperty[]>>;
  feature: IFeatureWithSpecialProperty;
}) {
  const { properties } = feature;

  return (
    <Accordion className="mb-3">
      {properties.map((property) => {
        if(property.type === SpecialPropertyType.DEFAULT){
          return (
            <TextProperty
              key={property.id}
              featuresList={featuresList}
              setFeaturesList={setFeaturesList}
              feature={feature}
              property={property}
            ></TextProperty>
          );
        }else {
          return (
            <TagProperty
              key={property.id}
              featuresList={featuresList}
              setFeaturesList={setFeaturesList}
              feature={feature}
              property={property}
            ></TagProperty>
          )
        }
      })}
    </Accordion>
  );
}
export default FeatureProperties;
